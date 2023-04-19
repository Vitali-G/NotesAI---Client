import React, {useEffect, useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [page, setPage] = useState("")

  useEffect(function () {
    setPage(window.location.pathname)
},)
  

  return (
    <>
      
      {(page !== "/login" && page !== "/register" && page !== "/") ?<nav>
        <NavLink to="/" id="logo" className="nav-component">
          N<span>otes</span>AI
        </NavLink>
        {page !== "/notes" ? <NavLink to="/notes" className="nav-component">
          Notes
        </NavLink>: ""}
        <NavLink to="/user" className="nav-component">
          UserName
        </NavLink>
        <NavLink to="/" className="nav-component">
        <button>Logout</button>
        </NavLink>
      </nav> : ""}

      {page == "/" ?
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
