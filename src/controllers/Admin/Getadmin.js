const express = require('express');
const { Admin } = require('@models/Admin');



const getadmin = ("/bulk" , async(req,res)=>{
    const filter = req.query.filter || "";

    const admins = await Admin.find({
        $or: [{
            name: {
                "$regex": filter
            }
        }]
    })

    res.json({
        admin: admins.map(admin => ({
            name: admin.name,
            adminId: admin._id
        }))
    })
    
})

module.exports = {
    getadmin
}