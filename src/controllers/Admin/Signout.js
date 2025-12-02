
const updatebody = zod.object({
    password: zod.string().optional(),
    name: zod.string().optional(),
})

const updateadmin = ("/admin" , authMiddleware, async(req,res)=>{
    const result = updatebody.safeParse(req.body)
    if (!result.success) {
        res.status(411).json({
            msg: "error while updating the information"
        })
    }

    await Admin.updateOne(req.body, {
        adminId: req.adminId
    })

    res.json({
        msg: "updated successfully"
    })

})

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
            name: admin.adminname,
            adminId: adminId
        }))
    })
    
})

const adminsignout = ("/signout", authMiddleware, async(req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]; // Assuming Bearer Token

    // 1. Add token to a temporary blacklist/revocation list in the database
    // blacklistToken(token); 

    // 2. Clear any session-related cookies (if used for refresh tokens)
    res.clearCookie('refresh_token');

    res.json({
        msg: "signout successful"
    })
    } catch (error){
        return res.status(500).json({message: "Error during signout"});
    }
})

module.exports = {
    updateadmin,
    getadmin,
    adminsignout
}
