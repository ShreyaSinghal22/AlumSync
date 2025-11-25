const express = require('express');
const AlumniRouter = require("./Alumni");
const AdminRouter = require("./Admin")

const router = express.Router();
router.use('/Alumni',AlumniRouter)
router.use('/Admin',AdminRouter)

module.exports = router;