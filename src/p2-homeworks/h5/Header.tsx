import React from 'react'
import {NavLink} from "react-router-dom";
import {path} from "./Routes";

function Header() {
  return (
    <div>
      <NavLink to={path.PreJunior}>pre-junior--</NavLink>
      <NavLink to={path.Junior}>junior--</NavLink>
      <NavLink to={path.JuniorPlus}>juniorPlus--</NavLink>
    </div>
  )
}

export default Header
