import React from "react";
import "./login.css";
import { user } from '../../context/index'


export default function Login() {
  const { username, setUsername, password, setPassword } = user()

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const registeruser = async () => {

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username: username, password: password}),
      };

      const res = await fetch("localhost:4000/users/login", options)

      if (res.ok) {
        console.log(`You have successfully Logged in ${username}`);
        window.location.assign("/notes");
      } else {
        console.log("error in login");
      }
    } 
  }

  return (
    <div id="login-page">
      <h1>NotesAI</h1>
      <h2>Login</h2>
      <form>
        <input onChange={usernameHandler} type="text" placeholder="Username" ></input>
        <input onChange={passwordHandler} type="password" placeholder="Password" ></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register Here</a>
      </p>
    </div>
  );
}