type ActionType = LoadingACType
export type InitStateType = {
  isLoading: boolean
}
type LoadingACType = {
  type: 'SET-IS-LOADING'
  value: boolean
}

const initState: InitStateType = {
  isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => {
  switch (action.type) {
    case 'SET-IS-LOADING': {
      return {...state, isLoading: action.value}
    }
    default:
      return state
  }
}

export const loadingAC = (value: boolean): LoadingACType => ({type: 'SET-IS-LOADING', value})