const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
require('module-alias/register');
const { connectDB } = require('./db/controller');
connectDB();    
const mainRouter = require('./routes/index');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors()); 

app.use(express.json()); 

 app.use('/api/v1', mainRouter);

app.get('/', (req, res) => {
    res.send('Welcome to AlumSync!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});