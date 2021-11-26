import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

  return (
    <div className={s.wrapp}>
      <div className={s.title}>Homework 3 :</div>
      <div>
        <input value={name} onChange={setNameCallback} className={s.input}/>
        <button onClick={addUser} className={s.button}>add</button>
      </div>
      <span className={s.error}>{error}</span>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
