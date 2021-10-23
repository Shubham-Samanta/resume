import classes from "../AdminPanel/Admin.module.css"
import PersonalData from "../AdminPanel/personalData/personalData"
import NewProject from "../AdminPanel/Projects/newProject/newProject"
import PreviousProject from "../AdminPanel/Projects/previousProjects/previousProjects"
function Admin()
{
     console.log("admin")
     return (
               <div className={classes.majorContainer}>
                    <div className={classes.emptyContainer}></div>
                    
                         <div className={classes.minorContainer}>
                              <div className={classes.titleContainer}>
                              <div className={classes.name}>Admin Panel</div>
                         
                                   <div className={classes.headingTitle}>01.
                                        <div className={classes.paraBig}>Personal data</div>
                                   </div>

                              <PersonalData/>

                                   <div className={classes.headingTitle}>02.
                                        <div className={classes.paraBig}>Projects</div>
                                   </div>

                              <NewProject/>

                              <PreviousProject/>
                              
                         </div>
                    </div>
               </div>
          
     )
}
export default Admin