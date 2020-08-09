import { Observable } from 'rxjs/Observable'
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import { apiCall } from '../../utils'
import baseURL from "../../common/index";

export const ERROR = 'ERROR';

const FORGOT = 'FORGOT'
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS'
const FORGOT_RESET = 'FORGOT_RESET'
const FORGOT_FAILURE = 'FORGOT_FAILURE'

const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAILURE = 'REGISTER_FAILURE'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag:false
}

export const forgotAction = payload => ({
  type: FORGOT,
  payload
})
const forgotSuccess = payload => ({
  type: FORGOT_SUCCESS,
  payload
})
export const forgotReset = payload => ({
  type: FORGOT_RESET,
  payload
})

export const loginAction = payload => ({
  type: LOGIN,
  payload
})

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
})

export const registerAction = payload => ({
  type: REGISTER,
  payload
})

const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
})


export const forgotEpic = action$ => action$
  .ofType(FORGOT)
  .mergeMap(action => staticAjax(apiCall(`${baseURL.url}netproreferral/api/user/forgot`, 'POST', true, action.payload))
    .map(response => forgotSuccess(response))
    .catch(error => Observable.of({
      type: FORGOT_FAILURE,
      payload: error
    }, {
        type: ERROR,
        payload: error
      })))
  
      export const loginEpic = action$ => action$
      .ofType(LOGIN)
      .mergeMap(action => staticAjax(apiCall(`http://52.32.202.178:9494/netproreferral/api/user/login`, 'POST', true, action.payload))
        .map(response => loginSuccess(response))
        .catch(error => Observable.of({
          type: LOGIN_FAILURE,
          payload: error
        }, {
            type: ERROR,
            payload: error
          })))

          export const registerEpic = action$ => action$
      .ofType(REGISTER)
      .mergeMap(action => staticAjax(apiCall(`http://52.32.202.178:9494/netproreferral/api/user/register`, 'POST', true, action.payload))
        .map(response => registerSuccess(response))
        .catch(error => Observable.of({
          type: REGISTER_FAILURE,
          payload: error
        }, {
            type: ERROR,
            payload: error
          })))

export function forgotReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORGOT: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
        flag:false
      }
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
        loading: false,
        error: false,
        flag:true
      }
    }
    case FORGOT_RESET: {
      return {
        ...state,
        data: {},
        loading: false,
        error: false,
        flag:true
      }
    }
    case FORGOT_FAILURE: {
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

export function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
        flag:false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
        loading: false,
        error: false,
        flag:true
      }
    }
    case LOGIN_FAILURE: {
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


export function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
        flag:false
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        data: action.payload.response,
        loading: false,
        error: false,
        flag:true
      }
    }
    case REGISTER_FAILURE: {
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


