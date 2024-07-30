import { combineReducers } from "redux"
import productReducer from "./product/slice"
import userReducer from "./user/slice"

const rootReducer = combineReducers({ productReducer, userReducer })

export default rootReducer
