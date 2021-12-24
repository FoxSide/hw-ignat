import React from 'react'
import {NavLink} from "react-router-dom";
import {path} from "./Routes";
import s from './Header.module.css'

function Header() {

  return (
    <div className={s.header}>
      <NavLink to={path.PreJunior} className={({isActive})=> isActive ? s.active : s.item}>Pre-Junior</NavLink>
      <NavLink to={path.Junior} className={({isActive})=> isActive ? s.active : s.item}>Junior</NavLink>
      <NavLink to={path.JuniorPlus} className={({isActive})=> isActive ? s.active : s.item}>Junior-Plus</NavLink>
      <div className={s.block}/>
    </div>
  )
}

export default Header


