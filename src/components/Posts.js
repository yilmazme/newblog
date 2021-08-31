import React,{useEffect,useState} from 'react'
import sanityClient from "../client";
import { v4 as uuid4 } from "uuid";

export default function Posts() {

    const [posts, setPosts]=useState(null)

useEffect(()=>{
    sanityClient.fetch(`*[_type=="post"]{
        title,
        mainImage {
            asset->{
                _id,
                url
            },
        }
    }`).then((data)=>setPosts(data))
    .catch((err)=>console.log(err))
},[])

    return (
        <div>
           {posts && posts.map((val)=>{
               return(
                   <div key={uuid4()}>
                       <img style={{width:"300px"}} src={val.mainImage.asset.url} alt="project"/>
                       <p>{val.title}</p>
                   </div>
               )
           })}
        </div>
    )
}
