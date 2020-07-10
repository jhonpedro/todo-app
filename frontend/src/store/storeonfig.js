import { combineReducers } from "redux"
import TodoReducer from "../pages/todo/todoReducer"

const reducer = combineReducers({
    todo: TodoReducer
})

export default reducer