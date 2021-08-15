const router = require("express").Router()
const Userdata=require("../Models/user.model")
const Project = require("../Models/project.model")
const { userValidation, projectValidation } = require("../Models/Validation")
const verify =require("../middleware/verifyToken")
router.get('/',async (req, res) => {
     const User = await Userdata.find()
     if (!User)
     {
          res.send("something is wrong")
     }
     else
     {
          Project.find()
          .then((projects)=>{res.json(projects)})
          .catch((err)=>{res.status(400).json(err)})
          console.log("hello")
     }
})

router.post('/add/user',verify, async (req, res) => {
     const {error}=userValidation(req.body)
     if (error)
     {
          res.status(400).send(error.details[0].message)
     }
     else
     {
          const _id = req.user._id
          const name = req.body.name
          const about_me_1=req.body.about_me_1
          const about_me_2 = req.body.about_me_2
          const get_in_touch = req.body.get_in_touch
          const email = req.body.email
          const phone = req.body.phone
          const git_link = req.body.git_link
          const linkedin_link = req.body.linkedin_link
          const facebook_link = req.body.facebook_link
          const insta_link = req.body.insta_link
          const newUserdata = new Userdata({
               _id,
               name,
               about_me_1,
               about_me_2,
               get_in_touch,
               email, phone,
               git_link,
               linkedin_link,
               facebook_link,
               insta_link,})
          try {
               const info = await newUserdata.save()
               res.json('user data added')
          }
               catch(err){res.status(400).json(err)}  
          }
     
})

router.post('/add/project',verify, async (req, res) => {
     const {error}=projectValidation(req.body)
     if (error) {
          res.status(400).send(error.details[0].message)
     }
     else {
          
     const user_id = req.user._id
     const projectname = req.body.projectname
     const about_project = req.body.about_project
     const tech_used = req.body.ech_used
     const git_link = req.body.git_link
     const project_link = req.body.project_link
     
     const newProject = new Project({
          user_id,
          projectname,
          about_project,
          tech_used,
          git_link,
          project_link,})
     newProject.save()
          .then(()=>{res.json('project added')})
          .catch((err)=>{res.status(400).json(err)})
     }
})
 module.exports=router