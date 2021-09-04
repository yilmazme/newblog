import React from "react";
import style from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Dropdown from "react-bootstrap/Dropdown";

export default function Navbar({openMail}) {

  return (
    <div className={style.navbar}>
      <NavLink activeStyle={{color:"rgb(187, 98, 223)"}} className={style.link} to="/" exact>
        Mehmet
      </NavLink>

     <NavLink activeStyle={{color:"rgb(187, 98, 223)"}} className={style.link} to="/projects">
        Projects
      </NavLink>

     <NavLink activeStyle={{color:"rgb(187, 98, 223)"}} className={style.link} to="/post">
        Posts
      </NavLink>

     <NavLink activeStyle={{color:"rgb(187, 98, 223)"}} className={style.link} to="/about">
        About me
      </NavLink>

      <Dropdown className={style.dropdown}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="projects">Projects</Dropdown.Item>
          <Dropdown.Item href="post">Posts</Dropdown.Item>
          <Dropdown.Item href="about">About me</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={style.social}>
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="https://github.com/yilmazme"
          target="_blank"
          bgColor="#d3f5ce"
        />
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="https://linkedin.com/in/mehmet-yilmaz-10b8121a6"
          target="_blank"
        />
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="https://www.instagram.com/yilmazmee/"
          target="_blank"
          bgColor="rgb(112, 9, 112)"
          fgColor="#fff"
        />
       <span onClick={()=>openMail()} style={{fontSize:"28px", color:"rgb(250, 156, 49)", position:"relative", top:"4px", cursor:"pointer"}} className="m-2 my-1"> <i className="fas fa-comment"></i></span>
      </div>
    </div>
  );
}
