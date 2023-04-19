import React from "react";
import "./login.css";

import { page, user } from '../../context/index'


export default function Login() {
  const {setCurrentPage} = page()
  const { user_id,setUser_id, email, setEmail, password, setPassword } = user()

  setCurrentPage(window.location.pathname)


  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();




    const loginUser = () => {

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email, password: password }),
      };


      fetch("http://localhost:4000/users/login", options)
        .then(response => response.json())
        .then(data => setUser_id(data.userid))
        .then(window.location.assign("/notes"))
      
      
      


    loginUser();
  }

  return (
    <div id="login-page">
      <h1>NotesAI</h1>
      <h2>Login</h2>
      <form>
        <input onChange={emailHandler} type="email" placeholder="Email"></input>
        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}
