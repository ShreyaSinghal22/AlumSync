const express = require('express');
const studentSignup = require('../controllers/Student/Signup');
const studentSignin = require('../controllers/Student/Signin');
const studentSignout = require('../controllers/Student/Signout');
const profile = require('../controllers/Student/profile');


const router = express.Router();


router.post('/student/signup', studentSignup.studentSignup);
router.post('/student/signout', studentSignout.studentSignout);
router.get('/student/profile/me', profile.getprof);
router.put('/student/profile/me', profile.profupdate);
router.post('/student/signin', studentSignin.studentSignin);

module.exports = router;