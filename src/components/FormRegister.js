import React from 'react';
import { View, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword, changeName } from '../actions/AuthenticationActions';

const formCadastro = props => {
  return (
    <ImageBackground source={require('../img/bg.png')} style={ styles.background }>
      <View style={ styles.mainContainer }>
        <View style={ styles.inputsContainer }>
          <TextInput value={props.name} 
                     placeholder="Nome" 
                     placeholderTextColor="#fff" 
                     style={ styles.input } 
                     onChangeText={text => props.changeName(text)}/>

          <TextInput value={props.email} 
                     placeholder="E-mail" 
                     placeholderTextColor="#fff" 
                     style={ styles.input } 
                     onChangeText={text => props.changeEmail(text)}/> 

          <TextInput secureTextEntry  
                     value={props.password} 
                     placeholder="Senha" 
                     placeholderTextColor="#fff" 
                     style={ styles.input } 
                     onChangeText={text => props.changePassword(text)}/>
        </View>
        <View style={ styles.buttonContainer } >
          <Button color="#115e54" title="Cadastrar" onPress={ () => false } />
        </View> 
      </View>
    </ImageBackground>
  )
}

const mapStateToProps = state => (
  {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    name: state.AuthenticationReducer.name
  }
)

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: null
  },
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