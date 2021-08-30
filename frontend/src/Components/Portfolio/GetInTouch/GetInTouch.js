import React from "react"
import classes from "../GetInTouch/GetInTouch.module.css"

function GetInTouch(props)
{
     return (<div className={classes.first}>
          {props.get_in_touch}
          {props.email}
          {props.phone}
     </div>)
}
export default GetInTouch