const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
     name: { type: String, unique: true, minlength: 6, tirm: true },
     about_me_1: { type: String, unique: true, minlength: 6, tirm: true },
     about_me_2: { type: String, unique: true, minlength: 6, tirm: true },
     get_in_touch: { type: String, unique: true, minlength: 6, tirm: true },
     email: { type: String, unique: true, minlength: 6, tirm: true },
     phone: { type: Number, unique: true, minlength: 6, tirm: true },
     git_link: { type: String, unique: true, minlength: 6, tirm: true },
     linkedin_link: { type: String, unique: true, minlength: 6, tirm: true },
     facebook_link: { type: String, unique: true, minlength: 6, tirm: true },
     insta_link: { type: String, unique: true, minlength: 6, tirm: true },
}, {
     timestamps:true
})
     
const Userdata = mongoose.model('Userdata', userSchema)
module.exports=Userdata