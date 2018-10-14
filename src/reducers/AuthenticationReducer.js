import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_NAME,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOADING_LOGIN,
  LOADING_REGISTRATION
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registrationError: '',
  loginError: '',
  loadingLogin: false,
  loadingRegistration: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  switch(action.type){
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    case CHANGE_EMAIL:
      return { ...state, email: action.payload }
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload }
    case REGISTRATION_ERROR:
      return { ...state, registrationError: action.payload, loadingRegistration: false }
    case REGISTRATION_SUCCESS:
      return { ...state, password: '', name: '' }
    case LOGIN_ERROR:  
      return { ...state, loginError: action.payload, loadingLogin: false }
    case LOADING_LOGIN:
      return { ...state, loadingLogin: true }
    case LOADING_REGISTRATION:
      return { ...state, loadingRegistration: true }
    default:
      return state
  }
}