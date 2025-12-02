
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


module.exports = {
    updateadmin
}
