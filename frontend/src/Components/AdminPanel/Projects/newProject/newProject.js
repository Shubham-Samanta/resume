import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import classes from "../newProject/newProject.module.css";

const NewProject = ()=>{
     
     const [projectName, setProjectName] = useState("")
     const [aboutProject, setAboutProject] = useState("")
     const [techUsed, setTechUsed] = useState([])
     const [gitLink, setGitLink] = useState("")
     const [projectLink, setProjectLink] = useState("")

     async function sendData(projectData) {
         try {
            const response = await axios.post("http://localhost:5001/admin/add/project", projectData)
            console.log(response)
            
            if (response.data.status==true) 
            {
                console.log("hell ya")
               //  return (<Redirect to="/Admin" />);
                // history.push("/Admin")
                }
        }
        catch(err){console.log(err)}
    }
     const loginclicked = (e) => {
         e.preventDefault();
         const projectData={
               projectname:projectName,
               about_project:aboutProject,
               tech_used:techUsed,
               git_link:gitLink,
               project_link:projectLink,
         }
         sendData(projectData)
             
     }

     return (
          <div className={classes.majorContainer}>
               
               <div className={classes.columnOne}>
               <div className={classes.para}>New Project</div>
                    <input type="text"
                                 placeholder="Project Name"
                                 value={projectName}
                                 onChange={(event) => { setProjectName(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="About Project"
                                 value={aboutProject}
                                 onChange={(event) => { setAboutProject(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Tech Used"
                                 value={techUsed}
                                 onChange={(event) => { setTechUsed(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Git Link"
                                 value={gitLink}
                                 onChange={(event) => { setGitLink(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Project Link"
                                 value={projectLink}
                                 onChange={(event) => { setProjectLink(event.target.value) }}
                    />
               </div>

               <div className={classes.columnTwo}></div>

                         <button className={classes.button} onClick={loginclicked}>Add Project</button> 
          </div>
         )
     }
 
export default NewProject