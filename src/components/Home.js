import React from "react";
import style from "../css/App.module.css"
export default function Home() {
  return (
    <>
      <div className={style.intro1}></div>
      <div className={style.intro2}></div>
      <div className={style.intro3}></div>
      <div className={style.intro4}>
        <div className={style.introContent}>
          <h2>Hello,</h2>
          <p>
            {" "}
            and welcome! The goal of this website is to introduce myself and
            share some experiences with people. I am a software developer with a
            few years of experience in both backend and frontend. Currently, I
            am working as a software engineer at Su Bilgi Teknolojileri A.Ş.
            Here on this site, you can find some of my works, experiences, and
            mistakes. The site is not complete and it won't be any time soon.
            Well,it is not because I am lazy, it is because there will always be
            new things to learn and share 😊
          </p>
        </div>
      </div>
    </>
  );
}
