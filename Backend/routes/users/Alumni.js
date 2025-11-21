const express = require('express');
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { Alumni } = require("../../models/Alumni");
const { Counter } = require("../../schemas/countermodel");
const getNextAlumniId = require("../../schemas/countermodel");


const alumniSignupbody = zod.object({
  alumniId: zod.number().int().nonnegative(),
  name: zod.string().min(1),    
  email: zod.string().email(),
  passwordHash: zod.string().min(8),
  batch: zod.string().min(1),
  department: zod.string().min(1),
  phone: zod.string().min(10).max(15),
  currentCompany: zod.string().min(1),
  mustBeVerified: zod.boolean()
});

router.post("alumni/signup", async (req,res)=>{
    const {success} = alumniSignupbody.safeParse(req.body)
    if(!success){
        return res.status(400).json({message: "Invalid request data"});
    }
    
    const existingUser = await alumni.find({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    }
    
    const alumniId = await getNextAlumniId();

    const alumni = await Alumni.create({
        alumniId: alumniId,
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        batch: req.body.batch,
        department: req.body.department,
        phone: req.body.phone,
        currentCompany: req.body.currentCompany,
        mustBeVerified: req.body.mustBeVerified
    });

    const token = jwt.sign({alumniId}, JWT_SECRET);
    
    res.json({
        msg: "user created",
        token: token
    })


});