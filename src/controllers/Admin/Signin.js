const express = require('express');
const zod = require("zod");
const jwt = require("jsonwebtoken");


const signinbody = zod.object({
    name: zod.string().min(1),
    password: zod.string(),
    email: zod.string().min(8).email()
})



const adminSignin = ("/signin", async (req,res) => {
   const result = signinbody.safeParse(req.body)
   if(!result.success) {
    res.status(411).json({
        msg: "Incrorrect inputs"
    })
   }

    const user = await User.findOne({
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    if(user) {
        const token = jwt.sign({
            adminId: adminId
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

});

exports.adminSignin = (req, res) => {
  res.send("Admin signin working");
};
