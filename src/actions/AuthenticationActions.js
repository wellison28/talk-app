import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

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
  console.log('ghj')
  return dispatch => {  
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
  console.log('sdfsdfds')
  dispatch ({ type: 'registration_success' })

  Actions.welcome()
}

export const registerUserError = (error, dispatch) => {
  console.log('sdfsdfdssdsdsd')
  dispatch ({ type: 'registration_error', payload: error.message })
}

export const authenticateUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => loginSuccess(dispatch))
      .catch(error => loginError(dispatch, error))    
  }
} 

export const loginSuccess = (dispatch) => {
  dispatch ({ type: 'login_success' })

  Actions.main()
}

export const loginError = (dispatch, error) => {
  dispatch ({ type: 'login_error', payload: error.message })
}