import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeChackedValueAC, changeSuccessDataTC} from "../BLL/regustReducer";
import {AppStoreType} from "../../h10/bll/store";
import s from './Reguest.module.css'
import loader from "../../../common/loader.svg";


const Reguest = () => {
  const dispatch = useDispatch()
  const state = useSelector((store: AppStoreType) => store.reguestReducer)
  const loading = useSelector((store: AppStoreType) => store.loading.isLoading)

  const onClickHandler = () => {
    dispatch(changeChackedValueAC(!state.success))
    dispatch(changeSuccessDataTC(state.success))
  }

  return (
    <div className={s.container}>
      {loading
        ? <img className={s.loader} src={loader} alt={'loader'}/>
        : <>
          <div className={s.text}>{state.info}</div>
          <input type={"checkbox"} onClick={onClickHandler}/>
        </>
      }


    </div>
  );
};

export default Reguest;