import React from "react";
import style from "../css/Navbar.module.css";
import {  Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


export default function Navbar() {
  return (
  
    <div className={style.navbar}>
    
    <Link className={style.link} to="/">Mehmet</Link>
 
    <Link className={style.link} to="/projects">Projects</Link>

    <Link className={style.link} to="/posts">Blog Posts</Link>
 
    <Link className={style.link} to="/about">About me</Link>
 
   
    <div className={style.social}>
    <SocialIcon style={{width:"2rem", height:"2rem", marginLeft:"3px"}} url="https://github.com/yilmazme" target="_blank" />
    <SocialIcon style={{width:"2rem", height:"2rem", marginLeft:"3px"}} url="linkedin.com/in/mehmet-yilmaz-10b8121a6" target="_blank" />
    <SocialIcon style={{width:"2rem", height:"2rem", marginLeft:"3px"}} url="https://www.instagram.com/yilmazmee/" target="_blank" />
    </div>
    </div>
  
  );
}
