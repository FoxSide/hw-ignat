import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeNameType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

function HW12() {
  const theme = useSelector((state: AppStoreType) => state.theme.theme)
  const themes = useSelector((state: AppStoreType) => state.theme.themes)
  const dispatch = useDispatch()

  const onChangeCallback = (option: string) => {
    dispatch(changeThemeAC(option as ThemeNameType))
  }

  return (
    <div className={s.wrapp}>
      <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                <div className={s.title}>Homeworks 12</div>
            </span>
      </div>
      <div className={s.selectBody}>
        <SuperSelect
          name={'radio'}
          value={theme}
          options={themes}
          onChangeOption={onChangeCallback}
        />
      </div>
    </div>
  );
}

export default HW12;
