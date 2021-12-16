import React,{ useState,useEffect } from "react";
import Portfolio from "../src/Components/Portfolio/Portfolio"
import {Route, Routes } from 'react-router-dom'
import Admin from './Components/AdminPanel/Admin'
import Login from './Components/login/form/login'
import Signup from './Components/login/form/signup'
function App()
{
  
    return (
      <div className={App}>
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