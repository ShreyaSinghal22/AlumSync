const express  = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { StudentSchema } = require('@models/Student');
const bcrypt = require('bcryptjs');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const studentSignupbody = zod.object({
  username: zod.string().min(1),    
  email: zod.string().email(),
  password: zod.string().min(8),
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);   
    
    try {
        const student = await Student.create({
            username,
            email,
            password: hashedPassword,
            batch,
            department,
            phone,
            createdAt
        });

        const token = jwt.sign(
            { studentId: student._id },    
            JWT_ACCESS_SECRET,
            { expiresIn: "7d" } 
        );

       res.status(201).json({
            success: true,
            message: 'Student registered successfully',
            token,
            student: {
                id: student._id,
                email: student.email,
                username: student.username,
                batch: student.batch,
                phone: student.phone,
                department: student.department,
                createdAt: student.createdAt
            }
       });


    } catch (error) {           
        return res.status(500).json({message: "Error creating student user"});
    }


};

   module.exports = { studentSignup };