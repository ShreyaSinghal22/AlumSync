const express = require('express');
const AlumniRouter = require("./Alumni");
const AdminRouter = require("./Admin")

const router = express.Router();
router.use('/alumni',AlumniRouter)
router.use('/admin',AdminRouter)

module.exports = router;