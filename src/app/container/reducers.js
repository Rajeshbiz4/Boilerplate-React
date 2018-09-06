import { combineReducers } from 'redux'
import { geneReducer } from './Dashboard/logic' 


const rootReducer = combineReducers({
  gene: geneReducer
})

export default rootReducer
