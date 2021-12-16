import classes from "../Introduction/Introduction.module.css"
import { Typewriter } from 'react-simple-typewriter'
function Introduction(props)
{
     return (
               <div className={classes.majorContainer}>
               <div className={classes.minorContainer}>
                    <div>
                    <div className={classes.titleContainer}>
                         <div className={classes.headingTitle}>Hi,my name is</div>
                              <div className={classes.name}>
                              
                                   <Typewriter  words = {[`${props.name}`]}
                                        loop = {1}
                                        typeSpeed={250}
                                        cursor
                                        cursorStyle='_'
                                        />
                                  
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