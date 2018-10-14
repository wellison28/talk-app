export const changeEmail = (text) => {
  console.log(text)
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