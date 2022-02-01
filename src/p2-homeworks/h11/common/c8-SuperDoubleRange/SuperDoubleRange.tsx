import React from 'react'
import {Slider} from "@material-ui/core";
import s from './../../HW11.module.css'

type SuperDoubleRangePropsType = {
  onChangeRange?: (value1: number, value2: number) => void
  value?: [number, number]
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    // min, max, step, disable, ...
  }
) => {
  // сделать самому, можно подключать библиотеки
  const [valueRange, setValueRange] = React.useState<number[] | undefined>(value);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValueRange(newValue as number[]);
    if (valueRange && onChangeRange) {
      onChangeRange(valueRange[0], valueRange[1])
    }
  };
  return (
    <>
      <div className={s.doubleRange}>
        <Slider
          value={valueRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
    </>
  )
}

export default SuperDoubleRange
