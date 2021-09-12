import React, { useState,useEffect } from "react"
import classes from "../Projects/Projects.module.css"
import Project from "./Project/Project"
import axios from "axios"

function Projects()
{
     
     const [projectComponent, setProjectComponent] = useState()
     
     async function getData() {
          try {
               const response = await axios.get("http://localhost:5000/portfolio/")
               
               if (response.data.length > 0) {
                    
                    const projectComponent = response.data.map(
                         function (items)
                         {
                              return (
                                   <Project projectname={items.projectname}
                                        about_project={items.about_project}
                                        tech_used={items.tech_used}
                                        git_link={items.git_link}
                                        project_link={items.project_link} />
                              )
                              }
                    )

                    setProjectComponent(await projectComponent)
                    
               }
          }
          catch(err){console.log(err)}
     }
     

     useEffect(() => {
          getData();
     }, []);

     // console.log(projectname)
     // console.log(about_project)
     // console.log(tech_used)
     // console.log(git_link)
     // console.log(project_link)
     console.log(projectComponent)
     console.log("end")
     // const projectComponent = data.map(
     //      function (items)
     //      {
     //           return (
     //                <Project projectname={items.projectname}
     //                     about_project={items.about_project}
     //                     tech_used={items.tech_used}
     //                     git_link={items.git_link}
     //                     project_link={items.project_link} />
     //           )
     //           }
     // )


     return (<div className={classes.majorContainer}>
                    <div className={classes.minorContainer}>
                         <div className={classes.titleContainer}>
                              <div className={classes.headingNumber}>02.</div>
                              <div className={classes.headingTitle}>Projects</div>
                              {/* <hr className={classes.margin}/> */}
                         </div>
                    {projectComponent}
                    </div>           
               </div>)
}
export default Projects