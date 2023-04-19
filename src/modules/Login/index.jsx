import React from "react";
import "./login.css";
import { user } from "../../context/index";

export default function Login() {
  const { email, setEmail, password, setPassword } = user();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const loginUser = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email, password: password }),
      };

      const res = await fetch("http://localhost:4000/users/login", options);

      if (res.ok) {
        console.log(`You have successfully Logged in ${email}`);
        window.location.assign("/notes");
      } else {
        console.log("error in login");
      }
    };

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
