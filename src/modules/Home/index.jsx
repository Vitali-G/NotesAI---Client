import React from "react";
import homePageImage from '../../assets/undraw_annotation_re_h774_1.png'
import './home.css'


export default function Home() {
  const registerButtonHandler = () => {
    window.location.assign("/register");
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
        <button id="try-now">Try Now</button>
        <button id="register" onClick={registerButtonHandler}>Register</button>
      </div>
      <img src={homePageImage} alt="picture of person looking at notes"/>
    </div>
  );
}
