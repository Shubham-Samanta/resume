import classes from "../Introduction/Introduction.module.css"
import Typewriter from "typewriter-effect"
function Introduction(props)
{
     return (
               <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                    <div>
                    <div className={classes.titleContainer}>
                               <div className={classes.headingTitle}>Hi,my name is</div>
                         <div className={classes.name}>
                              <Typewriter  onInit={(typewriter) => {
                                   typewriter.pauseFor(1000).typeString(props.name)
                                   .start()
                                   }} />
                                  {props.name}
                         </div>
                                   
                         <div className={classes.paraBig}>I build for the web</div>
                              <div className={classes.para}>{props.about_me_1  }</div>
                         </div>
                    </div>
                    </div>
               </div>
          
          
          
     )
}
export default Introduction