const express  = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { AlumniSchema } = require('@models/Alumni');
const bcrypt = require('bcryptjs');
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;


const alumniSignupbody = zod.object({
  name: zod.string().min(1),    
  email: zod.string().email(),
  password: zod.string().min(8),
  interest: zod.array(
    zod.object({
      name: zod.string(),
      category: zod.enum(["Professional", "Hobby", "Skill"]).default("Professional")
    })
  ).optional(),
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

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

    

    try{
        const alumni = await Alumni.create({
            name,
            email,
            password: hashedPassword,
            batch,
            department,
            phone,
            currentCompany,
            verified,
            createdAt
        });

        const token = jwt.sign(
            { alumniId: alumni._id },    
            JWT_ACCESS_SECRET,
            { expiresIn: "7d" } 
        );
    
        res.status(201).json({
            success: true,
            message: 'Alumni registered successfully',
            token,
            alumni: {
                id: alumni._id,
                email: alumni.email,
                name: alumni.name,
                department: alumni.department,
                batch: alumni.batch,
                department: alumni.department,
                phone: alumni.phone,
                currentCompany: alumni.currentCompany,
                verified: alumni.verified,  
                createdAt: alumni.createdAt
            }
        }); 

    }catch (error){
        return res.status(500).json({message: "Error creating alumni user"});
    } 

};

    module.exports = { alumniSignup };
