const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { AlumniSchema } = require('@models/Alumni');
const bcrypt = require('bcryptjs');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const signinbody = zod.object({
    username: zod.string().min(1),
    password: zod.string(),
    email: zod.string().min(8).email()
})



const alumniSignin = ("/signin", async (req,res) => {
  try{

   const result = signinbody.safeParse(req.body)
   if(!result.success) {
    res.status(411).json({
        msg: "Incrorrect inputs"
    })
   }

    const alumni = await Alumni.findOne({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })

    if (!alumni) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, alumni.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    
    const token = jwt.sign(
        { alumniId: alumni._id },  
        JWT_ACCESS_SECRET,
        { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token
    });

 }catch(error){ 
    res.status(411).json({
        message: "Error while logging in"
    })
   }
});

module.exports = { alumniSignin };