const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const linkarr = new Schema({
     link: { type: String,  minlength: 6 },
})

const projectSchema = new Schema({
     user_id: { type: String,  minlength: 6, tirm: true },
     projectname: { type: String,  unique: true,minlength: 6, tirm: true },
     about_project: { type: String,  minlength: 6, tirm: true },
     tech_used: { type: [linkarr]},
     git_link: { type: String, unique: true, minlength: 6, tirm: true },
     project_link: { type: String, unique: true, minlength: 6, tirm: true },
})
     
const Project = mongoose.model('Project', projectSchema)
module.exports=Project