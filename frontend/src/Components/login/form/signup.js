import React from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {AnimatePresence, motion} from 'framer-motion';
import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom';


const Signup = ()=>{
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    
    

    const signupclicked = (e) => {
        e.preventDefault();
       
    }

    //redirect to desired page if auth is complete,setAuth to true if the user is authenticated
    if (authyep) {
        return (
            <Redirect to="/StudentDashboard" />
        )
    }
    else {
        return(
            <div className={classes.majorContainer}>
                    <motion.div className={classes.form}
                        initial={{x:400}}
                        animate={{x:0,}}           
                    >
                        <ul>
                            <li><h3>Sign Up</h3></li>
                            <li>
                                <input 
                                    type="name" 
                                    placeholder="Name"
                                    onChange={(event) => { setName(event.target.value) }}
                                />
                            </li>
                            <li>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                />
                            </li>
                            <li>
                                <input 
                                    type="password" 
                                    placeholder="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                />
                            </li>
                            <li><button className={classes.button} onClick={signupclicked}>Sign Up</button></li>
                            <li><p className={classes.msg}>Already have an account?</p><Link to="/User/login" className={classes.link}><i>Login</i></Link></li>
                        </ul>
                    </motion.div>
            </div>
        )
    }    
}

export default Signup;