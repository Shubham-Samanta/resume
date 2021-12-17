import React,{ useState,useEffect } from "react";
import Portfolio from "../src/Components/Portfolio/Portfolio"
import {Route, Routes } from 'react-router-dom'
import Admin from './Components/AdminPanel/Admin'
import Login from './Components/login/form/login'
import Signup from './Components/login/form/signup'
import classes from '../src/App.module.css'
function App()
{
  
    return (
      <div className={classes.App}>
        <Routes>
          <Route path="/"
            element={
              <Portfolio/>} />
          <Route  path="/Admin" element={<Admin/>}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  )
  }
export default App