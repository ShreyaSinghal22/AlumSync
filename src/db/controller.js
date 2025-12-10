
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;


const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB URI
        const connection = await mongoose.connect(MONGODB_CONNECTION_STRING, {
            // Recommended Mongoose options for the latest driver
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, // Deprecated in recent versions
            // useFindAndModify: false, // Deprecated in recent versions
        });

        // Log successful connection details
        console.log(`MongoDB Connected: ${connection.connection.host}`);

        // Set up listeners for subsequent connection events
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB Connection Error AFTER initial connection:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB Disconnected. Attempting to reconnect...');
            // In production, you might implement a more robust reconnection logic here
        });

    } catch (error) {
        // Log connection failure and exit the process
        console.error('FATAL: MongoDB Connection Failed:', error.message);
        // Exit process with failure code
        process.exit(1);
    }
};

// Export the connection function to be called from your main server file (e.g., server.js or index.js)
module.exports = { connectDB };