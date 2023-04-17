import React from "react";
import './register.css'
export default function NoteEntry() {


// getSummary()

    return (
    <>
    <h1>NotesAI</h1>
    <h2>Register</h2>
    <form>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="email" placeholder="Email"></input>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}