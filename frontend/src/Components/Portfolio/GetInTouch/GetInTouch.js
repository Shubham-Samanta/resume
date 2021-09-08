import React from "react"
import classes from "../GetInTouch/GetInTouch.module.css"
import phoneSvg from '../../../Assets/phoneSvg.svg';
import emailSvg from '../../../Assets/emailSvg.svg';
function GetInTouch(props)
{
     return (
                    <div className={classes.majorContainer}>
                         <div className={classes.minorContainer}>
                              <div className={classes.titleContainer}>
                                   <div className={classes.headingNumber}>03.</div>
                                   <div className={classes.headingTitle}>Get in touch</div>
                                   {/* <hr className={classes.margin}/> */}
                         </div>
                              
                         <div className={classes.para}> <div >{props.get_in_touch}</div></div>
                             

                         <div className={classes.infoContainer}>
                         <div className={classes.emailContainer}>
                              <div className={classes.emailPic}>
                              <img src={emailSvg} style={{  width: 34 }}
              alt="email icon"/>
                              <div className={classes.email}>Email</div>
                                   
                              </div>
                              <div className={classes.emailValue}>{props.email}</div>  
                         </div>
                         <div className={classes.phoneContainer}>
                              <div className={classes.phonePic}>
                              <img src={phoneSvg} style={{  width: 28 }}
              alt="phone icon"/>
                              <div className={classes.phone}>Phone</div>
                                   
                              </div>
                              <div className={classes.phoneValue}>{props.phone}</div>
                              </div>
                              
                         </div>
                         </div>
                         
                                        
                    </div>)
}
{/* 
          */}
export default GetInTouch