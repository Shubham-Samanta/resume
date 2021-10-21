import classes from "../../../src/Components/Portfolio/Portfolio.module.css"
import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import GetInTouch from "./GetInTouch/GetInTouch";
import Projects from "./Projects/Projects"
import axios from "axios"
import React, { useState,useEffect } from "react"
function Portfolio()
{

     const [about_me_1, setAbout_me_1] = useState()
     const [about_me_2, setAbout_me_2] = useState()
     const [email, setEmail] = useState()
     const [facebook_link, setFacebook_link] = useState()
     const [get_in_touch, setGet_in_touch] = useState()
     const [git_link, setGit_link] = useState()
     const [insta_link, setInsta_link] = useState()
     const [linkedin_link, setLinkedin_link] = useState()
     const [name, setName] = useState()
     const [phone, setPhone] = useState()
     const [projectsdata, setProjectsdata] = useState()
     const [uid, setUid] = useState()

     async function getData() {
          try {
               const response =await axios.get("http://localhost:5001/portfolio/")
               if (response.data.length > 0) {
                    setAbout_me_1( response.data[0].about_me_1)
                    setAbout_me_2( response.data[0].about_me_2)
                    setEmail( response.data[0].email)
                    setFacebook_link( response.data[0].facebook_link)
                    setGet_in_touch( response.data[0].get_in_touch)
                    setGit_link( response.data[0].git_link)
                    setInsta_link( response.data[0].insta_link)
                    setLinkedin_link( response.data[0].linkedin_link)
                    setName( response.data[0].name)
                    setPhone( response.data[0].phone)
                    setProjectsdata(response.data[1])
                    setUid(response.data[1]. _id)
                    
               }
          }
          catch(err){console.log(err)}
     }
     

     useEffect(() => {
          getData();
     }, []);
     
     // console.log(about_me_1)
     // console.log(about_me_2)
     // console.log(email)
     // console.log(facebook_link)
     // console.log(get_in_touch)
     // console.log(git_link)
     // console.log(insta_link)
     // console.log(linkedin_link)
     // console.log(name)
     // console.log(phone)
//      console.log("hii")
//  console.log(projectsdata)
     return (
          <div className={classes.first}>
               <Header />
               <Introduction name={name } about_me_1={about_me_1 } />
               <AboutMe about_me_2={about_me_2} />
               <Projects projectsdata={projectsdata}/>
               <GetInTouch email={email} phone={phone} get_in_touch={ get_in_touch}/>
               <Footer/>
          </div>
     )
}
export default Portfolio