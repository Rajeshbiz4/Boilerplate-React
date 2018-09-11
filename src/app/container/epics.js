import { combineEpics } from 'redux-observable'
import { geneEpic } from './Dashboard/logic'
import { userdetailEpic } from './user/logic'


const rootEpic = combineEpics(
  geneEpic,
  userdetailEpic
)

export default rootEpic
