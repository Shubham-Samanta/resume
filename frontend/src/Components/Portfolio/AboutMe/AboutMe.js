import React from "react"
import classes from "../AboutMe/AboutMe.module.css"
import Profile from "../../../Assets/profile.jpeg"
function AboutMe(props)
{
     return (
          <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                              <div className={classes.titleContainer}>
                                   <div className={classes.headingNumber}>01.</div>
                                   <div className={classes.headingTitle}>About Me</div>
                    </div>
                    <div className={classes.infoContainer}>
                         <div className={classes.para}><div >{props.about_me_2}</div></div>
                         <div className={classes.profilePic}>
                              <div><img src={Profile} style={{  width: 260 }}
                                                  alt="Profile picture"/></div>
                              <div>hello</div>
                         </div>
                    </div>
                    
               </div>    
          </div>

     )
}
export default AboutMe