import { combineReducers } from 'redux'
import { geneReducer } from './Dashboard/logic' 
import { userDetailsReducer } from './user/logic'


const rootReducer = combineReducers({
  gene: geneReducer,
  userDetail: userDetailsReducer
})

export default rootReducer
