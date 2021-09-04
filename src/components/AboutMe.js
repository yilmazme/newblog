import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { v4 as uuid4 } from "uuid";
import style from "../css/About.module.css";
import Fade from 'react-reveal/Fade';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const AboutMe=({openMail})=> {
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
  console.log("about rendered");
  return (
    <div className={style.bioCardWraper}>
      {author &&
        author.map((el) => {
          return (
            <Fade left key={uuid4()} className={style.mainFade}>
              <div className={style.divOne}></div>
              <div className={style.divTwo}></div>
              <div className={style.divThree}></div>
              <div className={style.divFour}></div>
              <div className={style.introContent}>
          <h2>Hello,</h2>
          <p>
            {" "}
            and welcome! My name is Mehmet. I am a software developer, an old
            physicist, and a literature enthusiast. I would not say I am an
            expert in any of them. Just love them and the joy they give makes
            me feel like I am (if previous sentences did not sound coherent you
            are allowed to think that last auxiliary verb used in the sense of
            Heideggerian Philosophy ). <br></br>I build this site with React and
            Sanity.io. I am happy that it is scalable and robust because I am
            going to share many things and add many features. If you are a
            recruiter with a promising offer or a person who wants a website you
            can mail me with just a <span onClick={openMail} style={{color:"rgb(250, 156, 49)", cursor:"pointer"}}>click</span>. 
            If you are just an aimless visitor you should
            know that I love you more and you can mail me too.🙂
          </p>
        </div>
              <div className={style.bioCard}>
              <img src={urlFor(el.image).width(200).url()} alt="sdsds" />
              <p style={{fontFamily:"cursive"}}>{el.name}</p>
              <p>{el.bio[0].children[0].text}</p>
              <p >
                Ankara, Turkey <br></br>
                Phone: +90 538 476 1082 <br></br>
                E-mail: 10myilmaz@gmail.com
              </p>
            </div>
            </Fade>
          );
        })}
    </div>
  );
}

export default React.memo(AboutMe);