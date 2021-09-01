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

export default function AboutMe() {
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
            <Fade left key={uuid4()}>
            <div className={style.bioCard}>
              <img src={urlFor(el.image).width(200).url()} alt="sdsds" />
              <p style={{fontFamily:"cursive"}}>{el.name}</p>
              <p>{el.bio[0].children[0].text}</p>
              <p >
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
