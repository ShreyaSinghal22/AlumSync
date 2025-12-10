const express = require('express');
const adminSignup = require('../controllers/Admin/Signup');
const { getadmin } = require('../controllers/Admin/Getadmin');
const updateadmin = require('../controllers/Admin/Update');                         
const adminSignin = require('../controllers/Admin/Signin');
const adminsignout = require('../controllers/Admin/Signout');

const router = express.Router();


router.post('/admin/signup',adminSignup.adminSignup);
router.post('/admin/signin',adminSignin.adminSignin);
router.post('/admin/signout',adminsignout.adminsignout);         
router.get('/admin/Getadmin',getadmin.getadmin);
router.update('/admin/Updateadmin',updateadmin.updateadmin);

module.exports = router;