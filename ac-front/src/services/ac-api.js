import axios from "axios"

export const api = axios.create({
  baseURL: process.env.REACT_APP_AC_BACK,
  headers: {
    "Content-Type": "application/json",
  },
})
export default api
