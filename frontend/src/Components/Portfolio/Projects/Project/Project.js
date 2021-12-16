import React,{useEffect} from "react"
import classes from "./Project.module.css"
import Project1 from "../../../../Assets/Project1.png"
import Github from "../../../../Assets/github.svg"
import Website from "../../../../Assets/website.svg"
import AOS from 'aos'
import 'aos/dist/aos.css'
function Project(props)
{
     
     useEffect(() => {
          AOS.init({
               easing: 'ease-in',
               delay: 1000,
               once:true,
          })
     })
          if (props.num % 2 == 0) {
               return (
                    <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className={classes.majorContainer}>
                         <div  className={classes.columnOne}>
                              <div className={classes.projectImage}>
                                   <img src={Project1} style={{ width: 260 }}
                                        alt="Project1" />
                              </div>
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
          else
          {
               return (
                    <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className={classes.majorContainer}>
                         <div  className={classes.columnTwo} style={{ display: "block" }}>
                              <div className={classes.projectImage} style={{ float: "right"}}><img src={Project1} style={{ width: 260 }}
                              alt="Project1" /></div>
                              <div className={classes.techUsed}>{props.tech_used}</div>
                         </div>
                         
          
                         <div  className={classes.columnOne}>
                              <div className={classes.projectInfo} style={{ alignItems: "flex-end" }}> 
                                   <div className={classes.title}>Featured Project</div>
                                   <div className={classes.projectName}>{props.projectname}</div>
                              </div>
          
                              <div className={classes.backGround} style={{ textAlign: "right" }}>
                                   <div className={classes.aboutProject}>{props.about_project}</div>    
                              </div>
          
                              <div className={classes.linksContainer} style={{ justifyContent: "flex-start" }}>
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
}
export default Project