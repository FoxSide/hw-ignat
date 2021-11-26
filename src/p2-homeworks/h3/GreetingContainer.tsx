import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('Entered Text!') // need to fix any

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
    if (event.currentTarget.value) {
      setName(event.currentTarget.value)
      setError('')
    } else {
      setName('')
      setError('Entered Text!')
    }
  }
  const addUser = () => {
    if (name.length) {
      addUserCallback(name)
      alert(`Hello ${name} !`)
      setName('')
    } else {
      alert('Entered Text!')
    }
    // need to fix
  }
  const totalUsers = `Количество вводов: ${users.length}`// need to fix
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
