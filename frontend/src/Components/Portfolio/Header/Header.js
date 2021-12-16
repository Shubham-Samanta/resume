import React,{useEffect} from "react"
import classes from "../Header/Header.module.css"
import Slogo from "../../../Assets/Slogo.svg"
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
function Header()
{
     useEffect(() => {
          AOS.init({
               easing: 'ease-in',
               once:true,
          })
     })
     return (
          
          <div className={classes.majorContainer}>
          <div className={classes.iconContainer}>
          <img data-aos="fade-right" data-aos-duration="1000" src={Slogo} style={{  width: 50 }}
              alt="S logo"/>
          </div>
          <div className={classes.menuContainer}>
               <div data-aos="fade-down" data-aos-duration="1000" className={classes.aboutGroup}>
                    <div className={classes.number}>01.</div>
                    <div className={classes.btn}>about</div>
               </div>
               <div data-aos="fade-down" data-aos-duration="1500" className={classes.projectGroup}>
                    <div className={classes.number}>02.</div>
                    <div className={classes.btn}>project</div>
               </div>
               <div data-aos="fade-down" data-aos-duration="2000" className={classes.contactGroup}>
                    <div className={classes.number}>03.</div>
                    <div className={classes.btn}>contact</div>
               </div>
               <Link to="/login" style={{textDecoration:"none"}}>
               <div data-aos="fade-down" data-aos-duration="2500" className={classes.contactGroup}>
                    <div className={classes.number}>04.</div>
                    <div className={classes.btn}>admin</div>
               </div>
               </Link>
               <div data-aos="fade-down" data-aos-duration="3000" className={classes.resumeGroup}>
                    <div className={classes.resumebtn}>resume</div>
               </div>
          </div>
               </div>
               )
}
 export default Header