import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { v4 as uuid4 } from "uuid";
import style from "../css/About.module.css";
import Fade from "react-reveal/Fade";
import js from "../pngs/js.png";
import angular from "../pngs/angular.png";
import csharp from "../pngs/csharp.png";
import css from "../pngs/css.png";
import git from "../pngs/git.png";
import github from "../pngs/github.png";
import heroku from "../pngs/heroku.png";
import html from "../pngs/html.png";
import mongo from "../pngs/mongo.png";
import netlify from "../pngs/netlify.png";
import node from "../pngs/node.png";
import python from "../pngs/python.png";
import react from "../pngs/react.png";
import sql from "../pngs/sql.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const AboutMe = ({ openMail }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            image,
            bio
        }`
      )

      .then((data) => setAuthor(data))
      .catch((err) => console.log(err));
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <div className="mainContainer">
      <div className={style.skills}>
        <Fade right>
          <img src={js} alt="js" />
          <img src={node} alt="node" />
          <img src={css} alt="css" />
          <img src={html} alt="html" />
          <img src={react} alt="react" />
          <img src={angular} alt="angular" />
          <img src={python} alt="python" />
          <img src={csharp} alt="csharp" />
          <img src={sql} alt="sql" />
          <img src={mongo} alt="mongo" />

          <img src={git} alt="git" />
          <img src={github} alt="github" />
          <img src={netlify} alt="netlify" />
          <img src={heroku} alt="heroku" />
        </Fade>
      </div>

      <div className={style.bioCardWraper}>
        {author &&
          author.map((el) => {
            return (
              <Fade left key={uuid4()}>
                <div className={style.divOne}></div>
                <div className={style.divTwo}></div>
                <div className={style.divThree}></div>
                <div className={style.divFour}></div>
                <div className={style.introContent}>
                  <h2>Hello,</h2>
                  <p>
                    {"  "}
                    and welcome! My name is Mehmet. I am a software developer,
                    an old physicist, and a literature enthusiast. I would not
                    say I am an expert in any of them. Just love them and the
                    joy they give makes me feel like I am (if previous sentences
                    did not sound coherent you are allowed to think that last
                    auxiliary verb used in the sense of Heideggerian Philosophy
                    ). <br></br>I build this site with React and Sanity.io.
                    Happy that it is scalable and robust because I am going to
                    share many things and add many features. <br></br>
                    If you are a recruiter with a promising offer or a developer with questions 
                    you can send me an email with
                    just a{" "}
                    <span
                      onClick={openMail}
                      style={{ color: "rgb(250, 156, 49)", cursor: "pointer" }}
                    >
                      click
                    </span>{" "}
                    . If you are an aimless visitor, you should know that 
                    I love you more and you can mail me too &#128522;
                  </p>
                </div>
                <div className={style.bioCard}>
                  <img src={urlFor(el.image).width(200).url()} alt="sdsds" />
                  <p style={{ fontFamily: "cursive" }}>{el.name}</p>
                  <p>{el.bio[0].children[0].text}</p>
                  <p>
                    Ankara, Turkey <br></br>
                    Phone: +90 538 476 1082 <br></br>
                    E-mail: 10myilmaz@gmail.com
                  </p>
                </div>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(AboutMe);
