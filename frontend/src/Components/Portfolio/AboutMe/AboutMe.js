import React from "react"
import classes from "../AboutMe/AboutMe.module.css"

function AboutMe(props)
{
     return (
          <div className={classes.first}>
               
               {props.about_me_2}
          </div>

     )
}
export default AboutMe