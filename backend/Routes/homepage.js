const router = require("express").Router()
const Userdata=require("../Models/user.model")
const Project = require("../Models/project.model")
const { userValidation, projectValidation } = require("../Models/Validation")
const verify =require("../middleware/verifyToken")
// router.get('/',async (req, res) => {
//      const User = await Userdata.find()
//      if (!User)
//      {
//           res.send("something is wrong")
//      }
//      else
//      {
//           Project.find()
//           .then((projects)=>{res.json(projects)})
//           .catch((err)=>{res.status(400).json(err)})
//           console.log("hello")
//      }
// })


router.get('/',async (req, res) => {
     const User = await Userdata.find()
     if (!User)
     {
          res.send("something is wrong")
     }
     else
     {
          const data=await Userdata.aggregate([{
               $lookup: {
                       from: "projects",
                       localField: "_id",
                       foreignField: "user_id",
                       as: "projects_done"
                   }
          },
          { $unwind: { path: "$projects_done", preserveNullAndEmptyArrays: true }},
          ])
          res.send(data)
     }
})

module.exports=router