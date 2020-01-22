import checkReducer from './check'
import authReducer from './auth'
import { combineReducers } from 'redux'

//4.combine Reducer
const rootReducer = combineReducers({
  notes: checkReducer,
  user: authReducer,
})

export default rootReducer
