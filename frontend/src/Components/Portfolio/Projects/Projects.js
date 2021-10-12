import React, { useState,useEffect } from "react"
import classes from "../Projects/Projects.module.css"
import Project from "./Project/Project"
import axios from "axios"

function Projects(props)
{
     console.log(props.projectsdata)
     const [projectComponent, setProjectComponent] = useState()
     
     async function getData() {
          try {
               const response = props
               
               if (response.length > 0) {
                    
                    const projectComponent = response.map(
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