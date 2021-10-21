import React from "react";
import Portfolio from "../src/Components/Portfolio/Portfolio"
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import User from './Components/login/user'
import Admin from './Components/AdminPanel/Admin'
function App()
{
  return (
    <Router>
      <div className={App}>
        <Switch>
          <Route exact path="/">
            <Portfolio/>
          </Route>
          <Route  path="/User" >
          <AnimatePresence>
            <User />
          </AnimatePresence>
          </Route>
          <Route  path="/Admin">
            <Admin/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  )
}
export default App