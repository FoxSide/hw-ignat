import axios from "axios";

export const ReguestApi = {
  updateValue(value: boolean) {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
  }
}