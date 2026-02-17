const express = require('express');
const { alumniSignup } = require('../controllers/Alumni/Signup');
const { alumniSignin } = require('../controllers/Alumni/Signin');
const { alumniSignout } = require('../controllers/Alumni/Signout');
const { getprof, profupdate } = require('../controllers/Alumni/profile');   

const router = express.Router();

// POST /api/alumni/signup
// Handles the registration of a new alumni.
router.post('/alumni/signup', alumniSignup);
router.post('/alumni/signin', alumniSignin);
router.post('/alumni/signout', alumniSignout);
router.get('/alumni/profile/me', getprof);
router.put('/alumni/profile/me', profupdate);   

module.exports = router;