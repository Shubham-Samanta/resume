import React from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {motion} from 'framer-motion';
import { Redirect,useHistory } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from "axios"


const Login = ()=>{
     
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    // let history = useHistory()

    async function sendData(loginCred) {
        try {
            const response = await axios.post("http://localhost:5001/auth/login", loginCred)
            console.log(response)
            
            if (response.data.status==true) 
            {
                console.log("hell ya")
                return (<Redirect to="/Admin" />);
                // history.push("/Admin")
                }
        }
        catch(err){console.log(err)}
   }
   
    const loginclicked = (e) => {
        e.preventDefault();
        const loginCred = {
            email: email,
            password: password,   
       }
        sendData(loginCred)
            
    }
   

      //redirect to desired page if auth is complete,setAuth to true if the user is authenticated
    return (
            <div className={classes.majorContainer}>
                <motion.div className={classes.form}
                    initial={{x:400}}
                    animate={{x:"0%"}}
                >
                    <ul>
                        <li><h3>Login</h3></li>
                        <li>
                            <input type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </li>
                        <li>
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </li>
                        <li><button className={classes.button} onClick={loginclicked}>Login</button></li>
                        <li><p>Don't have an account?</p><Link to="/User/signup" className={classes.link}><i>Signup</i></Link></li>
                    </ul>
                </motion.div>                        
            </div>
        )
    }


export default Login;