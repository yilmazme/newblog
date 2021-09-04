import React from "react";
import style from "../css/App.module.css";
export default function Home() {
  return (
    <>
      <div className={style.intro1}></div>
      <div className={style.intro2}></div>
      <div className={style.intro3}></div>
      <div className={style.intro4}>
       <p className={style.p1}> Hello World🔵</p>
       <p className={style.p2}> I am Mehmet</p>
       <p className={style.p3}>🔵Software Developer</p>
      </div>
    </>
  );
}
