import { combineEpics } from 'redux-observable'
import { geneEpic } from './Dashboard/logic'


const rootEpic = combineEpics(
  geneEpic
)

export default rootEpic
