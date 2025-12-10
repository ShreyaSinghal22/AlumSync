const zod = require("zod");
const { Admin } = require("@models/Admin");
const authMiddleware = require("@middlewares/authMiddleware");

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
        admin: req.admin._id
    })

    res.json({
        msg: "updated successfully"
    })

})


module.exports = {
    updateadmin
}
