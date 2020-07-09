import { combineReducers } from "redux"
import TodoReducer from "../todo/TodoReducer"

const reducer = combineReducers({
    todo: TodoReducer
})

export default reducer