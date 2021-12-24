import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    name,
    options, value,
    onChange, onChangeOption
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }


  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i} className={s.label}>
      <input
        type={'radio'}
        name={name}
        onChange={onChangeCallback}
        value={o}
        checked={o === value}
        //checked, value
      />
      {o}
    </label>
  )) : []

  return (
    <div className={s.radioBlock}>
      {mappedOptions}
    </div>
  )
}

export default SuperRadio
