import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function Nav() {
  return (
      <>
          <nav>
              <NavLink to = "/" id="logo" className='nav-component'>N<span>otes</span>AI</NavLink>
              <NavLink to="/notes" className='nav-component'>Notes </NavLink>
              <NavLink to="/user" className='nav-component'>UserName </NavLink>
              <NavLink to="/" className='nav-component'><button>Logout</button></NavLink>
          </nav>
          <Outlet/>
      </>
  )
}

export default Nav