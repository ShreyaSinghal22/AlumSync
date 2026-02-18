

const jwt = require('jsonwebtoken');

// --- Configuration ---
// Note: In a real application, you should load this from environment variables.
// Using a placeholder secret here.
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your_default_secure_secret_key_12345';
const TOKEN_EXPIRATION = '15m'; // Token expires in 15 minutes


function generateAccessToken(userId, role) {
    // Define the payload (claims) to be stored in the token.
    // NOTE: We now include 'type: "access"' here, ensuring it is part of the token data.
    const payload = {
        sub: userId, // 'sub' is standard for subject/user ID
        role: role,
        type: 'access', // Custom claim indicating the type of token
    };

    // Sign the token using the secret and set expiration
    const token = jwt.sign(
        payload,
        JWT_ACCESS_SECRET,
        {
            expiresIn: TOKEN_EXPIRATION, // e.g., '15m', '1h', '7d'
        }
    );

    return token;
}

module.exports = { generateAccessToken };