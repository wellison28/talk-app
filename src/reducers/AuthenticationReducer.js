const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registrationError: '',
  loginError: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  switch(action.type){
    case 'change_name':
      return { ...state, name: action.payload }
    case 'change_email':
      return { ...state, email: action.payload }
    case 'change_password':
      return { ...state, password: action.payload }
    case 'registration_error':
      return { ...state, registrationError: action.payload }
    case 'registration_success';
      return { ...state, password: '', name: '' }
    case 'login_error':  
      return { ...state, loginError: action.payload }
    default:
      return state
  }
}