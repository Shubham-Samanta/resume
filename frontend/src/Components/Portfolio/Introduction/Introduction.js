import classes from "../Introduction/Introduction.module.css"

function Introduction(props)
{
     return (<div className={classes.first}>
          
          {props.name}
          
          {props.about_me_1  }
     </div>)
}
export default Introduction