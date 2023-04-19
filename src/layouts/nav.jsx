import React, {useEffect, useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";
import { page } from "../context";

function Nav() {
  const {currentPage} = page()
  

  return (
    <>
      
      {(currentPage !== "/login" && currentPage !== "/register" && currentPage !== "/") ?<nav>
        <NavLink to="/" id="logo" className="nav-component">
          N<span>otes</span>AI
        </NavLink>
        {currentPage !== "/notes" ? <NavLink to="/notes" className="nav-component">
          Notes
        </NavLink>: ""}
        <NavLink to="/user" className="nav-component">
          UserName
        </NavLink>
        <NavLink to="/" className="nav-component">
        <button>Logout</button>
        </NavLink>
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
