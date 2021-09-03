import React,{useState,useEffect} from 'react'
import sanityClient from "../client";
import { v4 as uuid4 } from "uuid";
import imageUrlBuilder from "@sanity/image-url";
import style from "../css/Projects.module.css";
import Fade from 'react-reveal/Fade';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const Projects=()=>{

    const [proje, setProje] = useState(null);

    useEffect(() => {
        
        sanityClient.fetch(`*[_type == "project"] | order(_createdAt asc){
            title,
            date,
            mainImage,
            description,
            link
        }`).then((data)=>setProje(data))
        .catch((err)=>console.log(err))

        return () => {
          
        }
    }, [])
    return (
        <div className={style.projectContainer}>
           {proje && proje.map((el)=>{
               return(
                <Fade right key={uuid4()}>
                   <div  className={style.oneProjectContainer}>
                       <img src={urlFor(el.mainImage).width(400).url()} alt="project_photo"/>
                      <div className={style.projectInfo}>
                      <h3>{el.title}</h3>
                       <p>{el.date.substring(0,10)}</p>
                       <p>{el.description}</p>
                       <a href={el.link} target="_blank" rel="noreferrer">Go to page</a>
                      </div>
                   </div>
                   </Fade>
               )
           })}
        </div>
    )
}
export default React.memo(Projects);