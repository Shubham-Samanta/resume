const Joi= require("joi")

//user validation schema
const userValidation = (data) => {
     const schema = Joi.object({
          name: Joi.string().min(6).required(),
          about_me_1:Joi.string().min(6).required(),
          about_me_2:Joi.string().min(6).required(),
          get_in_touch:Joi.string().min(6).required(),
          email: Joi.string().min(6).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
          phone:Joi.number().min(6).required(),
          git_link:Joi.string().min(6).required().uri(),
          linkedin_link:Joi.string().min(6).required().uri(),
          facebook_link:Joi.string().min(6).required().uri(),
          insta_link:Joi.string().min(6).required().uri(),
     });
     return (schema.validate(data))
}


//project validation schema
const projectValidation = (data) => {
     const schema = Joi.object({
          user_id:Joi.string().min(6).required(),
          projectname:Joi.string().min(6).required(),
          about_project:Joi.string().min(6).required(),
          tech_used:Joi.array().items(Joi.object({link: Joi.string().required()})) ,
          git_link:Joi.string().min(6).required().uri(),
          project_link:Joi.string().min(6).required().uri()
     });
     return (schema.validate(data))
}


// //Link validation schema
// const linkValidation = (data) => {
//      const schema = Joi.object({
//           Link: Joi.array().items(Joi.object({link: Joi.string().min(6).required().uri()})) 
//      });
//      return (schema.validate(data))
// }

module.exports.userValidation = userValidation
//module.exports.linkValidation=linkValidation
module.exports.projectValidation=projectValidation