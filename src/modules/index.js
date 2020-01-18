import checkReducer from './check'
import { combineReducers } from 'redux'

//4.combine Reducer
const rootReducer = combineReducers({
  notes: checkReducer,
})

export default rootReducer
