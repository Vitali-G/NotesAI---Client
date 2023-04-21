import React, {useEffect, useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";
import { page } from "../context";

function Nav() {
  const { currentPage } = page()

  const handleLogout = async() => {
    await fetch("http://localhost:4000/users/logout", {credentials: "include"})
    localStorage.userid = ""
    window.location.assign("/")
  }

  return (
    <>
      
      {(currentPage !== "/login" && currentPage !== "/register" && currentPage !== "/") ?<nav>
        <NavLink to="/" id="logo" className="nav-component">
          N<span>otes</span>AI
        </NavLink>
        {currentPage !== "/notes" ? <NavLink to="/notes" className="nav-component">
          Notes
        </NavLink>: ""}
        <NavLink className="nav-component">
          Hello, {localStorage.username}!
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
       
      </nav> : ""}

      {currentPage == "/" ?
        <>
      <NavLink to="/" id="logo" className="nav-component">
        N<span>otes</span>AI
        </NavLink>
          </>
        : ""}
      
      <Outlet />
    </>
  );
}

export default Nav;
