import React from "react";
import { Navlink, Outelet } from 'react-router-dom'

function Nav() {
  return (
      <>
          <nav>
              <Navlink to = "./"></Navlink>
              <Navlink to="./notes">Notes</Navlink>
              <Navlink to="./user">UserName</Navlink>
              <Navlink to="./">Logout</Navlink>
          </nav>
          <Outelet/>
      </>
  )
}

export default Nav