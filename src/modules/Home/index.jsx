import React from "react";
import homePageImage from '../../assets/undraw_annotation_re_h774_1.png'
import './home.css'
import { page } from "../../context/index";


export default function Home() {
  const {setCurrentPage} = page()
  setCurrentPage(window.location.pathname)
  const registerButtonHandler = () => {
    window.location.assign("/register");
  }

  const loginButtonHandler = () => {
    window.location.assign("/login");
  }
  return (
      <div id="home-page">
      <div id="details">
        <h1>
          <span>Create.</span>
          <span>Organise.</span>
          <span>Easy.</span>
        </h1>
        <p>NotesAI is the best place to jot down quick thoughts, or to save longer notes from your classes.</p>
        <button id="login" onClick={loginButtonHandler}>Login</button>
        <button id="register" onClick={registerButtonHandler}>Register</button>
      </div>
      <img src={homePageImage} alt="picture of person looking at notes"/>
    </div>
  );
}
