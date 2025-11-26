const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { Student } = require("../../models/Student");
const { Counter } = require("../../db/countermodel");
const getNextId = require("../../db/countermodel");



const studentSignupbody = zod.object({
  studentId: zod.number().int().nonnegative(),
  name: zod.string().min(1),    
  email: zod.string().email(),
  passwordHash: zod.string().min(8),
  batch: zod.string().min(1),
  department: zod.string().min(1),
  phone: zod.string().min(10),
  createdAt: zod.date()
});

const studentSignup = async (req, res) => {
    const result = studentSignupbody.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({message: "Invalid request data"});
    }
    
    const existingUser = await Student.findOne({
        email: req.body.email
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    }
    
    const studentId = await getNextId();

    try {
        const student = await student.create({
            studentId: studentId,
            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            batch: req.body.batch,
            department: req.body.department,
            phone: req.body.phone,
            createdAt: req.body.createdAt
        });

        const token = jwt.sign({studentId}, JWT_SECRET);
        
        res.json({
            msg: "user created",
            token: token
        });

    } catch (error) {           
        return res.status(500).json({message: "Error creating student user"});
    }

   module.exports = {
    studentsignup
   } 

};
