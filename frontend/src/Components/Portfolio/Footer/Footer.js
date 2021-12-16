import React,{useEffect} from "react"
import classes from "../Footer/Footer.module.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer()
{
     useEffect(() => {
          AOS.init({
               easing: 'ease-in',
               once:true,
          })
     })
     return (
          <div  data-aos="fade-down" data-aos-duration="2000" className={classes.majorContainer}>
               <center>
                    <div className={classes.content}>
                         Designed and build by Shubham Samanta
                    </div>
                    
               </center>
          </div>
     )
}
export default Footer