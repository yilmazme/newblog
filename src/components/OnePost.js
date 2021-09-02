import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import style from "../css/OnePost.module.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage {
            asset->{
                _id,
                url
                },
            },
            body,
            "name": author->name,
            "mahlas": author->slug,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
    return () => {};
  }, [slug]);

  console.log("onepost rendered");
  return (
    <div className={style.postContainer}>
      {singlePost && (
        <div className={style.onePostContainer}>
           
          <div className={style.postImg}>
            <img
              src={singlePost.mainImage.asset.url}
              alt="project"
            />
          </div>
          <div className={style.info}>
          <h3> 📘 {singlePost.title}</h3>
            <div className={style.authorInfo} >
            <img
              src={urlFor(singlePost.authorImage).width(70).url()}
              alt="sdsds"
            />
             <p>{singlePost.mahlas.current} ✏️</p>
            
            </div>
          </div>
         
          <div  className={style.content}>
          <BlockContent
         
            blocks={singlePost.body}
            projectId="t8moewut"
            dataset="production"
          />
          </div>
        </div>
      )}
    </div>
  );
}
