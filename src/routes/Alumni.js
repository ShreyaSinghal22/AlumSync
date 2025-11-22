const express = require('express');
const alumniSignup = require('../../controllers/Alumni/Signup');

const router = express.Router();

// POST /api/alumni/signup
// Handles the registration of a new alumni.
router.post('alumni/signup', Signup.alumniSignup);

module.exports = router;