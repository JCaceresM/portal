import { combineReducers } from "redux"
import modules from "./modules"
import login from "./session"

export default combineReducers({ login, modules })
