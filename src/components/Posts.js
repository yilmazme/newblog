import React,{useEffect,useState} from 'react'
import sanityClient from "../client";
import { v4 as uuid4 } from "uuid";
import { Link } from 'react-router-dom';
import style from '../css/Posts.module.css'
export default function Posts() {

    const [posts, setPosts]=useState(null)

useEffect(()=>{
    sanityClient.fetch(`*[_type=="post"]{
        title,
        slug,
        publishedAt,
        description,
        author -> {
            name
        },
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
        <div className={style.postsContainer}>
           {posts && posts.map((val)=>{
               return(
                 
                   <div key={uuid4()} className={style.onePostContainer}>
                      
                      <div>
                      <img style={{width:"300px"}} src={val.mainImage.asset.url} alt="project"/>
                       <p style={{marginTop:"1rem"}}> 📄 : {val.title}</p>
                       <p> 📅 : {new Date(val.publishedAt).toLocaleDateString()}</p>
                       <p> ✏️ : {val.author.name}</p>
                      </div>
                      <div className={style.postDescription}>
                          {val.description}
                           <br></br>
                           <br></br>
                          👉 <Link to={"/post/"+val.slug.current} > Read </Link> 📚
                      </div>
                      
                   </div>
               
               )
           })}
        </div>
    )
}
