import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";
import loader from './../../common/loader.svg'

function HW10() {
  const state = useSelector<AppStoreType, InitStateType>((state) => state.loading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 1000)
  };
  return (
    <div className={s.wrapp}>
      <div className={s.title}>Homework 10 :</div>
      {state.isLoading
        ? (
          <img className={s.loader} src={loader} alt={'loader'}/>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
    </div>
  )
}

export default HW10
