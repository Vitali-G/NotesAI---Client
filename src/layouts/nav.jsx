import React from "react";
import { Navlink, Outlet } from 'react-router-dom'

function Nav() {
  return (
      <>
          <nav>
              <Navlink to = "/"></Navlink>
              <Navlink to="/notes">Notes</Navlink>
              <Navlink to="/user">UserName</Navlink>
              <Navlink to="/">Logout</Navlink>
              <Navlink to="/note">CreateNotePage</Navlink>
          </nav>
          <Outlet/>
      </>
  )
}

export default Nav