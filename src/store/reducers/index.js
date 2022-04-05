import { combineReducers } from 'redux'
import { todoReducer } from 'store/todo'

const rootReducer = combineReducers({
  todo: todoReducer,
})

export default rootReducer
