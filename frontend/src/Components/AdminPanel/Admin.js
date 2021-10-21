import classes from "../AdminPanel/Admin.module.css"

function Admin(props)
{
     return (
          <div className={classes.majorContainer}>
               
               <div className={classes.emptyContainer}></div>
               
                              <div className={classes.minorContainer}>
                                   <div className={classes.titleContainer}>
                                   <div className={classes.headingTitle}>Admin page</div>
                                   <div className={classes.name}>{props.name}</div>
                                   
                                   <div className={classes.paraBig}>hello</div>
                              <div className={classes.para}>{props.about_me_1  }</div>
                              </div>
                    </div>
               </div>
          
          
          
     )
}
export default Admin