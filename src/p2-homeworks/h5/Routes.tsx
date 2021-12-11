import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Routes, Route} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const path = {
  PreJunior: '/pre-junior',
  Junior: '/junior',
  JuniorPlus: '/juniorPlus'
}

export function RoutesComponent() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<PreJunior/>}/>
        <Route path={path.PreJunior} element={<PreJunior/>}/>
        <Route path={path.Junior} element={<Junior/>}/>
        <Route path={path.JuniorPlus} element={<JuniorPlus/>}/>
        <Route path={'/*'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}


