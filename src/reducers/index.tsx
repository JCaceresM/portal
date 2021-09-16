import { combineReducers } from "redux"
import images from "./images"
import modules from "./modules"
import login from "./session"

export default combineReducers({ login, modules ,images})
