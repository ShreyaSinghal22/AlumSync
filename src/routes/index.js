const express = require('express');
const AlumniRouter = require("./Alumni");
const AdminRouter = require("./Admin")
const StudentRouter = require("./Student")

const router = express.Router();
router.use('/alumni',AlumniRouter)
router.use('/admin',AdminRouter)
router.use('/student',StudentRouter)

module.exports = router;