const express = require('express');
const router = express.Router();
// const alumniController = require('../controllers/alumniController'); // You will use this later

// Define the POST endpoint for signup
router.post('/signup', (req, res) => {
    // 1. Check if the request body is available (req.body)
    console.log('Received Signup Request Body:', req.body);
    
    // 2. Perform validation, save data to MongoDB, etc. (Controller logic goes here)
    
    // 3. Send a success response back to Postman
    res.status(201).json({ 
        message: 'Alumni registration successful!',
        data: req.body // Echo back the data for confirmation
    });
});

module.exports = router;