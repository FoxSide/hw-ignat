import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = +setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date?.toLocaleTimeString()
  const stringDate = date?.toLocaleDateString()

  return (
    <div>
      <div className={s.screen}>
        <div className={s.time} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{stringTime}</div>
        <div className={s.dateOff}>{show && <div className={s.dateOn}>{stringDate}</div>}</div>
      </div>
      <div className={s.button}>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  )
}

export default Clock
