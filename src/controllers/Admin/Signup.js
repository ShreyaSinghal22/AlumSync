const express  = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { AdminSchema } = require('@models/Admin');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;


const adminsignupbody = zod.object({
    username: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(8),
    role: zod.string().min(1),
    fullname: zod.string().min(3),
    createdAt: zod.date()
});

const adminSignup = async (req, res) => {
    const result = adminsignupbody.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({message: "Invalid request data"});
    }

    const existingUser = await Admin.findOne({
        email: req.body.email
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    try{
        const admin = await Admin.create({
            username,
            email,
            password: hashedPassword,
            fullname,
            role: 'admin',
            createdAt
        });

        const token = jwt.sign(
            { adminId: admin._id },    
            JWT_ACCESS_SECRET,
            { expiresIn: "7d" } 
        );

        res.json({
            msg: "admin user created",
            token: token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email,
                fullName: admin.fullName,
                role: admin.role,
            }
        });

    } catch (error){
        return res.status(500).json({message: "Error creating admin user"});
    }


};

   module.exports = { adminSignup };