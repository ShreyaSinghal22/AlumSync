const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { StudentSchema } = require('@models/Student');
const bcrypt = require('bcryptjs');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const signinbody = zod.object({
    username: zod.string().min(1),
    password: zod.string(),
    email: zod.string().min(8).email()
})



const studentSignin = ("/signin", async (req,res) => {
   try{
    const result = signinbody.safeParse(req.body)
   if(!result.success) {
    res.status(411).json({
        msg: "Incrorrect inputs"
    })
   }

    const student = await Student.findOne({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    if (!student) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, student.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    
    const token = jwt.sign({
        studentId: student._id
    }, JWT_ACCESS_SECRET);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token
    })

}catch(error){ res.status(411).json({
        message: "Error while logging in"
    })
   }
});

module.exports = { studentSignin };