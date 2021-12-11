import React from 'react'
import {NavLink} from "react-router-dom";
import {path} from "./Routes";
import s from './Header.module.css'

function Header() {

  return (
    <div className={s.header}>
      <div className={s.text}><NavLink className={s.item} to={path.PreJunior}>Pre-Junior</NavLink></div>
      <div className={s.text}><NavLink className={s.item} to={path.Junior}>Junior</NavLink></div>
      <div className={s.text}><NavLink className={s.item} to={path.JuniorPlus}>Junior-Plus</NavLink></div>
      <div className={s.block}></div>
    </div>
  )
}

export default Header


