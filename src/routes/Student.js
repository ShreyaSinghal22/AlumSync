const express = require('express');
const studentSignup = require('../../controllers/Student/Signup');

const router = express.Router();

// POST /api/alumni/signup
// Handles the registration of a new alumni.
router.post('student/signup', Signup.studentSignup);

module.exports = router;