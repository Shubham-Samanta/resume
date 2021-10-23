import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import classes from "../personalData/personalData.module.css";

const PersonalData = ()=>{
     
     const [name, setName] = useState("")
     const [aboutMePart1, setAboutMePart1] = useState("")
     const [aboutMePart2, setAboutMePart2] = useState("")
     const [getInTouch, setGetInTouch] = useState("")
     const [phone, setPhone] = useState("")
     const [gitLink, setGitLink] = useState("")
     const [facebookLink, setFacebookLink] = useState("")
     const [linkedinLink, setLinkedInLink] = useState("")
     const [instaLink, setInstaLink] = useState("")
     const [email, setEmail] = useState("")

     async function sendData(userData) {
         try {
            const response = await axios.post("http://localhost:5001/admin/add/userdata", userData)
            console.log(response)
            
            if (response.data.status==true) 
            {
                console.log("hell ya")
               //  return (<Redirect to="/Admin" />);
                // history.push("/Admin")
                }
        }
        catch(err){console.log(err)}
    }
    
     const loginclicked = (e) => {
         e.preventDefault();
         const userData={
               name:name,
               about_me_1:aboutMePart1,
               about_me_2:aboutMePart2,
               get_in_touch:getInTouch,
               email:email,
               phone:phone,
               git_link:gitLink,
               linkedin_link:linkedinLink,
               facebook_link:facebookLink,
               insta_link:instaLink,
         }
         sendData(userData)
             
     }

     return (
          <div className={classes.majorContainer}>
               
               <div className={classes.columnOne}>
                    <input type="text"
                                 placeholder="Name"
                                 value={name}
                                 onChange={(event) => { setName(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="About Me Part 1"
                                 value={aboutMePart2}
                                 onChange={(event) => { setAboutMePart1(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="About Me Part 2"
                                 value={aboutMePart1}
                                 onChange={(event) => { setAboutMePart2(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Get In Touch"
                                 value={getInTouch}
                                 onChange={(event) => { setGetInTouch(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Email"
                                 value={email}
                                 onChange={(event) => { setEmail(event.target.value) }}
                    />
               </div>

               <div className={classes.columnTwo}>
               <input type="text"
                                 placeholder="Phone"
                                 value={phone}
                                 onChange={(event) => { setPhone(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Git hub Link"
                                 value={gitLink}
                                 onChange={(event) => { setGitLink(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Facebook Link"
                                 value={facebookLink}
                                 onChange={(event) => { setFacebookLink(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Linked-In Link"
                                 value={linkedinLink}
                                 onChange={(event) => { setLinkedInLink(event.target.value) }}
                    />
                    <input type="text"
                                 placeholder="Instagram Link"
                                 value={instaLink}
                                 onChange={(event) => { setInstaLink(event.target.value) }}
                    />
               </div>

                         <button className={classes.button} onClick={loginclicked}>Add Data</button>              
             </div>
         )
     }
 
export default PersonalData