import React from "react";
import style from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Dropdown from "react-bootstrap/Dropdown";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Link className={style.link} to="/">
        Mehmet
      </Link>

      <Link className={style.link} to="/projects">
        Projects
      </Link>

      <Link className={style.link} to="/post">
        Blog Posts
      </Link>

      <Link className={style.link} to="/about">
        About me
      </Link>

      <Dropdown className={style.dropdown}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="projects">Projects</Dropdown.Item>
          <Dropdown.Item href="post">Blog Posts</Dropdown.Item>
          <Dropdown.Item href="about">About me</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={style.social}>
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="https://github.com/yilmazme"
          target="_blank"
        />
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="linkedin.com/in/mehmet-yilmaz-10b8121a6"
          target="_blank"
        />
        <SocialIcon
          style={{ width: "2rem", height: "2rem", marginLeft: "3px" }}
          url="https://www.instagram.com/yilmazmee/"
          target="_blank"
        />
      </div>
    </div>
  );
}
