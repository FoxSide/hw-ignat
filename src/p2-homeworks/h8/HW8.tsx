import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
  _id: number
  name: string
  age: number
}
type SortUpACType = {
  type: 'sortUp'
}
type SortDownACType = {
  type: 'sortDown'
}
type CheckACType = {
  type: 'check'
}

export type ActionsType = SortUpACType | SortDownACType | CheckACType


const initialPeople = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

export const sortUpAC = () => ({type: 'sortUp'} as const)
export const sortDownAC = () => ({type: 'sortDown'} as const)
export const checkAC = () => ({type: 'check'} as const)

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople)

  const finalPeople = people.map((p: UserType) => (
    <div key={p._id} className={s.item}>
      <div>{p.name}</div>
      <div>{p.age}</div>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
  const check = () => setPeople(homeWorkReducer(initialPeople, checkAC()))



  return (
    <div className={s.wrapp}>
      <div className={s.title}>Homework 8 :</div>
      <div className={s.body}>{finalPeople}</div>
      <div>
      <SuperButton onClick={sortUp}>Sort up</SuperButton>
      <SuperButton onClick={sortDown}>Sort down</SuperButton>
      <SuperButton onClick={check}>Check 18</SuperButton>
      </div>
    </div>
  )
}

export default HW8
