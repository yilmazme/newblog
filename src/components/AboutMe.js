import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { v4 as uuid4 } from "uuid";
import style from "../css/App.module.css";

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
     setTimeout(()=>{
         console.log(author)
     },2000)
  }, []);

  return (
    <div className={style.bioCardWraper}>
      {author &&
        author.map((el) => {
          return (
            <div key={uuid4()} className={style.bioCard}>
              <img src={urlFor(el.image).width(200).url()} alt="sdsds" />
              <p>{el.name}</p>
              <p>{el.bio[0].children[0].text}</p>
            </div>
          );
        })}
    </div>
  );
}
