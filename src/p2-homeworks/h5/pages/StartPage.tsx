import React from 'react';
import s from './StartPage.module.css'
import logo from './../../../common/346.gif'

export const StartPage = () => {
  return (
    <div className={s.body}>
      <p>Hi! It's my Homeworks. </p>
      <p>Please select a page to continue.</p>
      <img src={logo} alt="logo"/>
    </div>
  );
};