import {ActionsType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
  switch (action.type) {
    case 'sortUp': {
      let stateCopy = [...state]
      return stateCopy.sort((a: UserType, b: UserType) => a.age - b.age)
    }
    case 'sortDown': {
      let stateCopy = [...state]
      return stateCopy.sort((a: UserType, b: UserType) => b.age - a.age)
    }
    case 'check': {
      let stateCopy = [...state]
      return stateCopy.filter(f => f.age >= 18)
    }
    default:
      return state
  }
}