import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const changeEmail = (text) => {
  return {
    type: 'change_email',
    payload: text
  }
}

export const changePassword = (text) => {
  return {
    type: 'change_password',
    payload: text
  }
}

export const changeName = (text) => {
  return {
    type: 'change_name',
    payload: text
  }
}

export const registerUser = ({name, email, password}) => {
  return dispatch => {  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch))
      .catch(error => registerUserError(error, dispatch))
  }
}

export const registerUserSuccess = (dispatch) => {
  dispatch ({ type: 'registration_success' })

  Actions.welcome()
}

export const registerUserError = (error, dispatch) => {
  dispatch ({ type: 'registration_error', payload: error.message })
}