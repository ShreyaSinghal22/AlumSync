const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { AdminSchema } = require('@models/Admin');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const bcrypt = require('bcryptjs');

const signinbody = zod.object({
    username: zod.string().min(1),
    password: zod.string(),
    email: zod.string().min(8).email()
})



const adminSignin = ("/signin", async (req,res) => {
   try {
    const result = signinbody.safeParse(req.body)
   if(!result.success) {
    res.status(411).json({
        msg: "Incrorrect inputs"
    })
   }

    const admin = await Admin.findOne({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    if (!admin) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    
    const token = jwt.sign(
    { adminId: admin._id },  
    JWT_ACCESS_SECRET,
    { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
    });

 } catch (error) {
        res.status(411).json({
        message: "Error while logging in"
    });
 }

});

module.exports = { adminSignin };