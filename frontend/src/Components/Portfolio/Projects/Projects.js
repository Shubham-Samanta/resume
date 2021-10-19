import React, { useState,useEffect } from "react"
import classes from "../Projects/Projects.module.css"
import Project from "./Project/Project"

function Projects({projectsdata=[]})
{
     const projectComponent = projectsdata.map(
          function (items)
          {
               return (
                    <Project
                         num={projectsdata.indexOf(items)}
                         key={items. _id}
                         projectname={items.projectname}
                         about_project={items.about_project}
                         tech_used={items.tech_used}
                         git_link={items.git_link}
                         project_link={items.project_link} />
               )
               }
     )
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