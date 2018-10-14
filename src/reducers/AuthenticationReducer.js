const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registrationError: '',
  loginError: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  if(action.type === 'change_name'){
    return { ...state, name: action.payload }
  }
  else if(action.type === 'change_email'){
    return { ...state, email: action.payload }
  }
  else if(action.type === 'change_password'){
    return { ...state, password: action.payload }
  }
  else if(action.type === 'registration_error'){
    return { ...state, registrationError: action.payload }
  }
  else if(action.type === 'registration_success'){
    return { ...state, password: '', name: '' }
  }
  else if(action.type === 'login_error'){
    return { ...state, loginError: action.payload }
  }

  return state;
}