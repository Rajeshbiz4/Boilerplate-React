import { Observable } from 'rxjs/Observable'
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { apiCall } from '../../utils'
export const ERROR = 'ERROR'

const USER = 'USER'
export const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAILURE = 'USER_FAILURE'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
}

export const fetchUserAction = payload => ({
  type: USER,
  payload
})

const geneSuccess = payload => ({
  type: USER_SUCCESS,
  payload
})

export const geneEpic = action$ => action$
  .ofType(USER)
  .mergeMap(action => staticAjax(apiCall(`https://api.github.com/users?q=${action.payload.q}`, 'GET'))
    .map(response => geneSuccess(response))
    .catch(error => Observable.of({
      type: USER_FAILURE,
      payload: error
    }, {
        type: ERROR,
        payload: error
      })))

export function geneReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      }
    }
    case USER_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
        loading: false,
        error: false
      }
    }
    case USER_FAILURE: {
      return {
        ...state,
        data: [],
        loading: false,
        error: false
      }
    }
    default:
      return state
  }
}

