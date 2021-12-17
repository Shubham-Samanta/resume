import React, { useEffect } from "react"
import classes from "../Projects/Projects.module.css"
import Project from "./Project/Project"
import { motion } from "framer-motion"
import AOS from 'aos'
import 'aos/dist/aos.css'
function Projects({projectsdata=[]})
{useEffect(() => {
     AOS.init({
          easing: 'ease-in',
          // delay: 1000,
          once:true,
     })
})
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
     return (
          <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                    <div>
                    <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className={classes.titleContainer}>
                              <div className={classes.headingNumber}>02.</div>
                              <div className={classes.headingTitle}>Projects</div>
                              {/* <hr className={classes.margin}/> */}
               </div>
                     {projectComponent}
                    </div>
               </div>           
          </div>
     )
}
export default Projects