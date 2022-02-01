type InitStateType = typeof initState
export type ThemeNameType = 'some' | 'red' | 'dark' | 'blue' | 'orange'
type ChangeThemeACType = {
  type: 'CHANGE-THEME'
  theme: ThemeNameType
}
type ActionType = ChangeThemeACType

const initState = {
  themes: ['dark', 'red', 'some', 'blue', 'orange'],
  theme: 'some'
};

export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
  switch (action.type) {
    case "CHANGE-THEME": {
      return {...state, theme: action.theme}
    }
    default:
      return state;
  }
};

export const changeThemeAC = (theme: ThemeNameType): ChangeThemeACType => ({type: 'CHANGE-THEME', theme})