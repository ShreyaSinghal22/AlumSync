const express = require('express');
const { alumniSchema } = require('../../../models/Alumni');
const authMiddleware = require('../../../middlewares/authMiddleware');

const alumniSignout = ("/signout", authMiddleware, async(req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]; // Assuming Bearer Token

    // 1. Add token to a temporary blacklist/revocation list in the database
    // blacklistToken(token); 

    // 2. Clear any session-related cookies (if used for refresh tokens)
    res.clearCookie('refresh_token');

    res.json({
        msg: "signout successful"
    })
    } catch (error){
        return res.status(500).json({message: "Error during signout"});
    }
})

module.exports = {
    alumniSignout
}