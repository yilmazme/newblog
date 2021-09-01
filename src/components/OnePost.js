import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";

export default function OnePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage {
            asset->{
                _id,
                url
                },
            },
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
    return () => {};
  }, [slug]);

  console.log("onepost rendered");
  return (
    <div>
      {singlePost && (
        <div>
          <img
            style={{ width: "300px" }}
            src={singlePost.mainImage.asset.url}
            alt="project"
          />
          <p>{singlePost.title}</p>
        </div>
      )}
    </div>
  );
}
