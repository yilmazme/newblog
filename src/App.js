import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import style from "./css/App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import OnePost from "./components/OnePost";
import Mail from "./components/Mail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

const [openMail, setOpenMail] =  useState(false)

function getFlagForMail(){
setOpenMail(!openMail)
}
function toggleClose(){
setOpenMail(!openMail)
}
  return (
    <div className={style.body}>
      <Router>
        <Navbar openMail={getFlagForMail}/>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/post" exact>
            <Posts />
          </Route>
          <Route path="/post/:slug">
            <OnePost />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Mail toggle={openMail} close={toggleClose}/>
    </div>
  );
}

export default App;
