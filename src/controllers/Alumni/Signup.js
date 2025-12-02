const express  = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { Counter, getNextId } = require('../../db/countermodel');




const alumniSignupbody = zod.object({
  alumniId: zod.number().int().nonnegative(),
  name: zod.string().min(1),    
  email: zod.string().email(),
  passwordHash: zod.string().min(8),
  batch: zod.string().min(1),
  department: zod.string().min(1),
  phone: zod.string().min(10),
  currentCompany: zod.string().min(1),
  verified: zod.boolean(),
  createdAt: zod.date()
});

const alumniSignup = async (req, res) => {
    const result = alumniSignupbody.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({message: "Invalid request data"});
    }
    
    const existingUser = await Alumni.findOne({
        email: req.body.email
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    }
    
    const alumniId = await getNextId();

    try{
        const alumni = await Alumni.create({
            alumniId: alumniId,
            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            batch: req.body.batch,
            department: req.body.department,
            phone: req.body.phone,
            currentCompany: req.body.currentCompany,
            verified: req.body.verified,
            createdAt: req.body.createdAt
        });

        const token = jwt.sign({alumniId}, JWT_SECRET);
    
        res.json({
            msg: "user created",
            token: token
        }); 

    }catch (error){
        return res.status(500).json({message: "Error creating alumni user"});
    } 

};

    module.exports = { alumniSignup };
