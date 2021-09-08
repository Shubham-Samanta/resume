import React from "react"
import classes from "../Header/Header.module.css"
import Slogo from "../../../Assets/Slogo.svg"
function Header()
{
     return (<div className={classes.majorContainer}>
          <div className={classes.iconContainer}>
          <img src={Slogo} style={{  width: 50 }}
              alt="S logo"/>
          </div>
          <div className={classes.menuContainer}>
               <div className={classes.aboutGroup}>
                    <div className={classes.number}>01.</div>
                    <div className={classes.btn}>about</div>
               </div>
               <div className={classes.projectGroup}>
                    <div className={classes.number}>02.</div>
                    <div className={classes.btn}>project</div>
               </div>
               <div className={classes.contactGroup}>
                    <div className={classes.number}>03.</div>
                    <div className={classes.btn}>contact</div>
               </div>
               <div className={classes.resumeGroup}>
                    <div className={classes.resumebtn}>resume</div>
               </div>
          </div>
     </div>)
}
 export default Header