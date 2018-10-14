import firebase from 'firebase';

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
  dispatch ({ type: 'success' })
}

export const registerUserError = (error, dispatch) => {
  dispatch ({ type: 'error' })
}