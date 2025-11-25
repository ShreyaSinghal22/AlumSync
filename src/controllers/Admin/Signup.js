const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { Admin } = require("../../models/Admin");
const { Counter } = require("../../schemas/countermodel");
const getNextAlumniId = require("../../schemas/countermodel");


const adminsignupbody = zod.object({
    adminId: zod.number().int().nonnegative(),
    name: zod.string().min(1),
    email: zod.string().email(),
    passwordHash: zod.string().min(8),
    role: zod.string().min(1),
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

    const adminId = await getNextAlumniId();

    const admin = await Admin.create({
        adminId: adminId,
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        role: req.body.role
    });

    const token = jwt.sign({adminId}, JWT_SECRET);
    res.json({
        msg: "admin user created",
        token: token
    });
}