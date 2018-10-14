const INITIAL_STATE = {
  name: 'Wellison',
  email: 'wellison@gmail.com',
  password: '123123'
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  if(action.type === 'change_name'){
    return { ...state, name: action.payload }
  }else if(action.type === 'change_email'){
    return { ...state, email: action.payload }
  }else if(action.type === 'change_password'){
    return { ...state, password: action.payload }
  }

  return state;
}