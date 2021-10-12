const router = require("express").Router()
const Userdata=require("../Models/user.model")
const Project = require("../Models/project.model")
const { userValidation, projectValidation } = require("../Models/Validation")
const verify = require("../middleware/verifyToken")



//To get the user data as well as the projets of that particular user
router.get('/', async (req, res) => {
     const data = [];
     const User = await Userdata.find()
     data.push(User[0])
     Project.find({"user_id":User[0]. _id})
          .then((projects) => {
               data.push(projects)
               res.json(data)
          })
          .catch((err)=>{res.status(400).json(err)})
})

module.exports=router