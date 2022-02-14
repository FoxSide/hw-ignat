import {Dispatch} from "redux";
import {ReguestApi} from "../Reguest/reguestApi";
import {loadingAC} from "../../h10/bll/loadingReducer";

export type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof changeChackedValueAC> | ReturnType<typeof changeSuccesDataAC>

const initialState = {
  success: true,
  message: '',
  info: ''
}

export const reguestReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'CHANGE-CHACKED-VALUE': {
      return {
        ...state,
        success: action.value
      }
    }
    case "CHANGE-CHACKED-DATA": {
      return {
        ...state,
        message: action.message,
        info: action.info
      }
    }
    default:
      return state
  }
}

export const changeChackedValueAC = (value: boolean) => ({type: 'CHANGE-CHACKED-VALUE', value} as const)
const changeSuccesDataAC = (message: string, info: string) => ({type: 'CHANGE-CHACKED-DATA', message, info} as const)

export const changeSuccessDataTC = (success: boolean) => (dispatch: Dispatch) => {
  dispatch(loadingAC(true))
  ReguestApi.updateValue(success)
    .then(res => {
      dispatch(changeSuccesDataAC(res.data.info, res.data.errorText))
      dispatch(loadingAC(false))
    })
    .catch(error => {
      dispatch(changeSuccesDataAC(error.response.data.info, error.response.data.errorText))
      dispatch(loadingAC(false))
    })
}


