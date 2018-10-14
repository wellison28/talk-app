import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
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
} from './types';

export const changeEmail = (text) => {
  return {
    type: CHANGE_EMAIL,
    payload: text
  }
}

export const changePassword = (text) => {
  return {
    type: CHANGE_PASSWORD,
    payload: text
  }
}

export const changeName = (text) => {
  return {
    type: CHANGE_NAME,
    payload: text
  }
}

export const registerUser = ({name, email, password}) => {
  return dispatch => {  
    dispatch ({ type: LOADING_REGISTRATION })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailB64 = b64.encode(email);

        firebase.database().ref('/contacts/' + emailB64)
          .push({ name })
          .then(value => registerUserSuccess(dispatch))

        }
      )
      .catch(error => registerUserError(error, dispatch))
  }
}

export const registerUserSuccess = (dispatch) => {
  dispatch ({ type: REGISTRATION_SUCCESS })

  Actions.welcome()
}

export const registerUserError = (error, dispatch) => {
  dispatch ({ type: REGISTRATION_ERROR, payload: error.message })
}

export const authenticateUser = ({ email, password }) => {
  return dispatch => {
    dispatch ({ type: LOADING_LOGIN })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => loginSuccess(dispatch))
      .catch(error => loginError(dispatch, error))    
  }
} 

export const loginSuccess = (dispatch) => {
  dispatch ({ type: LOGIN_SUCCESS })

  Actions.main()
}

export const loginError = (dispatch, error) => {
  dispatch ({ type: LOGIN_ERROR, payload: error.message })
}