import React,{useEffect} from "react"
import classes from "../AboutMe/AboutMe.module.css"
import Profile from "../../../Assets/profile.jpeg"
import AOS from 'aos'
import 'aos/dist/aos.css'
function AboutMe(props)
{
     useEffect(() => {
          AOS.init({
               easing: 'ease-out',
               once:true,
          })
     })

     return (
         
          <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                    <div>
                    <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className={classes.titleContainer}>
                                   <div className={classes.headingNumber}>01.</div>
                                   <div className={classes.headingTitle}>About Me</div>
                         </div>
               
                              
              
                    <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className={classes.infoContainer}>
                         <div className={classes.para}><div >{props.about_me_2}</div></div>
                              <div className={classes.profilePic}>
                                  
                                   <img src={Profile} style={{ width: 260 ,borderRadius:"5%" }}
                                        alt="Profile picture" />
                                   
                                   
                         </div>
                    </div>
                    </div>
               </div>    
          </div>
     )
}
export default AboutMe