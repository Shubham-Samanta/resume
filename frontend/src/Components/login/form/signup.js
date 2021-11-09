import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import classes from '../form/signup.module.css';
import { motion} from 'framer-motion';
import { useState, useEffect } from "react"
import Logo from '../../../Assets/Slogo.svg';
import axios from "axios"

const Signup = () => {
    const navigate = useNavigate();
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);

    
    async function sendData(signupCred) {
        try {
            const response = await axios.post("http://localhost:5001/auth/register", signupCred)
            console.log(response)
            
            if (response.data.status==true) 
            {
                navigate("/login")
                }
        }
        catch(err){console.log(err)}
   }

    const signupclicked = (e) => {
        e.preventDefault();
        const signupCred = {
            name: username,
            email: email,
            password: password,   
       }
        sendData(signupCred)
    }

    //redirect to desired page if auth is complete,setAuth to true if the user is authenticated

        return(
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
                            <li><p className={classes.msg}>Already have an account?</p><Link to="/login" className={classes.link}><i>Login</i></Link></li>
                        </ul>
                    </motion.div>
         </div>
     </motion.div>
                












                    
           
        )
    
}

export default Signup;