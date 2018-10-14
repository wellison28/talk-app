import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword, changeName, registerUser } from '../actions/AuthenticationActions';

class formRegister extends Component {

  renderBtn(){
    if(this.props.loadingRegistration){
      return (<ActivityIndicator size="large" />)
    }else{
      return (<Button color="#115e54" title="Cadastrar" onPress={ () => this._registerUser() } />)
    }
  }

  _registerUser(){
    const {name, email, password} = this.props;

    this.props.registerUser({name, email, password})
  }

  render(){
    return (
      <ImageBackground source={require('../img/bg.png')} style={ styles.background }>
        <View style={ styles.mainContainer }>
          <View style={ styles.inputsContainer }>
            <TextInput value={this.props.name} 
                       placeholder="Nome" 
                       placeholderTextColor="#fff" 
                       style={ styles.input } 
                       onChangeText={text => this.props.changeName(text)}/>

            <TextInput value={this.props.email} 
                       placeholder="E-mail" 
                       placeholderTextColor="#fff" 
                       style={ styles.input } 
                       onChangeText={text => this.props.changeEmail(text)}/> 

            <TextInput secureTextEntry  
                       value={this.props.password} 
                       placeholder="Senha" 
                       placeholderTextColor="#fff" 
                       style={ styles.input } 
                       onChangeText={text => this.props.changePassword(text)}/>

            <Text style={ styles.messageError }>{ this.props.registrationError }</Text>
          </View>
          <View style={ styles.buttonContainer } >
            { this.renderBtn() }
          </View> 
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => (
  {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    name: state.AuthenticationReducer.name,
    registrationError: state.AuthenticationReducer.registrationError,
    loadingRegistration: state.AuthenticationReducer.loadingRegistration
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
  messageError: {
    fontSize: 18,
    color: '#ff0000'
  },
  buttonContainer: {
    flex: 1
  }
})

export default connect(mapStateToProps, { changeEmail, changePassword, changeName, registerUser })(formRegister)