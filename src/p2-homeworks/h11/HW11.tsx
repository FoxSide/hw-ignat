import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const changeRange = (value: number) => {
    setValue1(value)
  }
  const changeDoubleRange = (value1: number, value2: number) => {
    setValue1(value1)
    setValue2(value2)
  }

  return (
    <div className={s.wrapp}>
      <div className={s.title}>Homeworks 11</div>
      <div className={s.container}>
        <div className={s.value}>{value1}</div>
        <SuperRange
          onChangeRange={changeRange}
          value={value1}
        />
        <div className={s.value}>{value2}</div>
      </div>
      <div className={s.container}>
        <div className={s.value}>{value1}</div>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={changeDoubleRange}
        />
        <div className={s.value}>{value2}</div>
      </div>
    </div>
  )
}

export default HW11
