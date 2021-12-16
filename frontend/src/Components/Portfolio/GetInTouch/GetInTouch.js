import React,{useEffect} from "react"
import classes from "../GetInTouch/GetInTouch.module.css"
import phoneSvg from '../../../Assets/phoneSvg.svg';
import emailSvg from '../../../Assets/emailSvg.svg';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer'
function GetInTouch(props)
{
     useEffect(() => {
          AOS.init({
               easing: 'ease-in',
               delay: 1500,
               once:true
          })
     })

     return (
               <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                    <div className={classes.help}>
                    <div data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" className={classes.titleContainer}>
                                   <div className={classes.headingNumber}>03.</div>
                                   <div className={classes.headingTitle}>Get in touch</div>
                                   {/* <hr className={classes.margin}/> */}
                         </div>
                              
                    <div data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200" className={classes.para}>
                         <div >{props.get_in_touch}</div>
                    </div>
                             

                    <div className={classes.infoContainer}>
                         <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className={classes.emailContainer}>
                              <div className={classes.emailPic}>
                              <img src={emailSvg} style={{  width: 34 }}
                                   alt="email icon"/>
                              <div className={classes.email}>Email</div>
                                   
                              </div>
                              <div className={classes.emailValue}>{props.email}</div>  
                         </div>
                         <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className={classes.phoneContainer}>
                              <div className={classes.phonePic}>
                              <img src={phoneSvg} style={{  width: 28 }}
              alt="phone icon"/>
                              <div className={classes.phone}>Phone</div>
                                   
                              </div>
                              <div className={classes.phoneValue}>{props.phone}</div>
                              </div>
                         </div>
                         <Footer/>
                    </div>    
               </div>          
          </div>)
}
{/* 
          */}
export default GetInTouch