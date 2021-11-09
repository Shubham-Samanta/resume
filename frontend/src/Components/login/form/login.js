import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import classes from '../form/login.module.css';
import {motion} from 'framer-motion';
import { useState} from "react"
import axios from "axios"
import Logo from '../../../Assets/Slogo.svg';

const Login = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    

    async function sendData(loginCred) {
        try {
            const response = await axios.post("http://localhost:5001/auth/login", loginCred)
            console.log(response)
            
            if (response.data.status) 
            {
                navigate("/Admin")

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
        <motion.div className={classes.majorContainer} 
        initial={{opacity:0.9,}}
        animate={{opacity:1,}}
        exit={{opacity:0.9,}}
        >
            <div className={classes.logoDisplay}>
                <motion.div className={classes.border}
                   initial={{opacity:0,}}
                   animate={{opacity:1,}}
                   exit={{opacity:0,}}
                ></motion.div>
                <motion.div
                   initial={{opacity:0,}}
                   animate={{opacity:1,}}
                   exit={{opacity:0,}}
                >                
                   
                </motion.div>
                <motion.div
                   initial={{opacity:0,}}
                   animate={{opacity:1,}}
                   exit={{opacity:0,}}
                >                
                   <Link to="/User" style={{textDecoration:"none"}}>
                       <div className={classes.logoContainer}>
                           <img src={Logo} />
                           <div className={classes.content}>MY PORTFOLIO</div>          
                       </div>
                   </Link>
                </motion.div>
   
            </div>
            <div className={classes.forms}>
            <motion.div className={classes.form}
                        initial={{x:400}}
                        animate={{x:0,}}           
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
                        <li><p>Don't have an account?</p><Link to="/signup" className={classes.link}><i>Signup</i></Link></li>
                    </ul>
                    </motion.div>
            </div>
        </motion.div>









                   
                
        )
    }


export default Login;