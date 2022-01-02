import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";
import style from "../css/Posts.module.css";
import Fade from "react-reveal/Fade";

const Posts=({prop})=> {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
        title,
        slug,
        publishedAt,
        description,
        categories[]->{title},
        author -> {
            name
        },
        mainImage {
            asset->{
                _id,
                url
            },
        }
    }`
      )
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.postsContainer}>
      {posts &&
        posts.map((val) => {
          return (
            <Fade left key={uuid4()}>
              <div className={style.onePostContainer}>
                <div className={style.photoContainer}>
                  <img
                    src={val.mainImage.asset.url}
                    alt="project"
                  />
                 
                </div>
                <div className={style.postDescription}>
                  {val.description}
                  <br></br>
                  <br></br>
                  <p style={{ marginTop: "1rem" }}> 📄 : {val.title}</p>
                  <p style={{ marginTop: "1rem" }}> 🔎 : {val.categories[0].title}</p>
                  <p> 📅 : {new Date(val.publishedAt).toLocaleDateString()}</p>
                  👉 <Link to={"/participated/" + val.slug.current}> Read More</Link>
                  {/* <p> ✏️ : {val.author.name}</p> */}
                </div>
              </div>
            </Fade>
          );
        })}
    </div>
  );
}

export default React.memo(Posts);