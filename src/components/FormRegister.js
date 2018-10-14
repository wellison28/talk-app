import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword, changeName } from '../actions/AutenticationActions';

const formCadastro = props => {
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.inputsContainer }>
        <TextInput value={props.name} placeholder="Nome" style={ styles.input } onChangeText={text => props.changeName(text)}/>
        <TextInput value={props.email} placeholder="E-mail" style={ styles.input } onChangeText={text => props.changeEmail(text)}/> 
        <TextInput secureTextEntry  value={props.password} placeholder="Senha" style={ styles.input } onChangeText={text => props.changePassword(text)}/>
      </View>
      <View style={ styles.buttonContainer } >
        <Button color="#115e54" title="Cadastrar" onPress={ () => false } />
      </View> 
    </View>
  )
}

const mapStateToProps = state => (
  {
    email: state.AutenticationReducer.email,
    password: state.AutenticationReducer.password,
    name: state.AutenticationReducer.name
  }
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20
  },
  inputsContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  input: {
    fontSize: 20,
    height: 45,
  },
  buttonContainer: {
    flex: 1
  }
})

export default connect(mapStateToProps, { changeEmail, changePassword, changeName })(formCadastro)