import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// need to fix

  return (
    <div className={s.affair}>
      <div className={s.name}>{props.affair.name}</div>
      <div>{props.affair.priority}</div>
      <button className={s.buttonDelete} onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
