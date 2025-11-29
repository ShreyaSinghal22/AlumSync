const express = require('express');
const adminSignup = require('../controllers/Admin/Signup');

const router = express.Router();

// POST /api/alumni/signup
// Handles the registration of a new alumni.
router.post('/admin/signup',adminSignup.adminSignup);

module.exports = router;