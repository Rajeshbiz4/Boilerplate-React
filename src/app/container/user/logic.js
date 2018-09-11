import { Observable } from 'rxjs/Observable'
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { apiCall } from '../../utils'
export const ERROR = 'ERROR'

const USER_DETAILS = 'USER_DETAILS'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
const USER_DETAILS_FAILURE = 'USER_DETAILS_FAILURE'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag:false
}

export const getUserDetailsAction = payload => ({
  type: USER_DETAILS,
  payload
})

const getUserDetailsSuccess = payload => ({
  type: USER_DETAILS_SUCCESS,
  payload
})

export const userdetailEpic = action$ => action$
  .ofType(USER_DETAILS)
  .mergeMap(action => staticAjax(apiCall(`https://api.github.com/users/${action.payload}/repos`, 'GET'))
    .map(response => getUserDetailsSuccess(response))
    .catch(error => Observable.of({
      type: USER_DETAILS_FAILURE,
      payload: error
    }, {
        type: ERROR,
        payload: error
      })))

export function userDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_DETAILS: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
        flag:false
      }
    }
    case USER_DETAILS_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
        loading: false,
        error: false,
        flag:true
      }
    }
    case USER_DETAILS_FAILURE: {
      return {
        ...state,
        data: [],
        loading: false,
        error: false,
        flag: false
      }
    }
    default:
      return state
  }
}

