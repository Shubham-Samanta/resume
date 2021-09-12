import React from "react"
import classes from "./Project.module.css"
import Project1 from "../../../../Assets/Project1.png"
import Github from "../../../../Assets/github.svg"
import Website from "../../../../Assets/website.svg"
function AboutMe(props)
{
     return (
          <div className={classes.majorContainer}>
               <div className={classes.columnOne}>
                    <div className={classes.projectImage}><img src={Project1} style={{ width: 260 }}
                    alt="Project1" /></div>
                    <div className={classes.techUsed}>{props.tech_used}</div>
               </div>
               

               <div className={classes.columnTwo}>
                    <div className={classes.projectInfo}>
                         <div className={classes.title}>Featured Project</div>
                         <div className={classes.projectName}>{props.projectname}</div>
                    </div>

                    <div className={classes.backGround}>
                         <div className={classes.aboutProject}>{props.about_project}</div>    
                    </div>

                    <div className={classes.linksContainer}>
                              <a href={props.git_link} style={{backgroundColor: "transparent"}}>
                                   <img src={Github} style={{ width: 22 ,backgroundColor: "transparent"}}
                                   alt="Github icon" />
                              </a>
                              <a href={props.project_link} style={{backgroundColor: "transparent"}}>
                                   <img src={Website} style={{ width: 26 ,backgroundColor: "transparent"}}
                                   alt="Github icon" />
                              </a>
                    </div>
               </div>    
          </div>

     )
}
export default AboutMe