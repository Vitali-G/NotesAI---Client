import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {
  return (
      <>
          <nav>
              <NavLink to = "/"></NavLink>
              <NavLink to="/notes">Notes</NavLink>
              <NavLink to="/user">UserName</NavLink>
              <NavLink to="/">Logout</NavLink>
              <NavLink to="/note">New Note</NavLink>
          </nav>
          <Outlet/>
      </>
  )
}

export default Nav
