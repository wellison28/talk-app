import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeEmail, changePassword, authenticateUser } from '../actions/AuthenticationActions';

class formLogin extends Component {

  renderBtnAccess() {
    if(this.props.loadingLogin) {
      return (<ActivityIndicator size="large" />)
    }else {
      return (<Button color="#115e54" title="Acessar" onPress={() => this._authenticateUser() } />)
    }
  }

  _authenticateUser() {
    const { email, password } = this.props;

    this.props.authenticateUser({ email, password })
  }

  render(){
    return (
      <ImageBackground source={require('../img/bg.png')} style={ styles.background }>
        <View style={ styles.mainContainer }>
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>Whatsap Clone</Text>
          </View>
          <View style={ styles.inputContainer } >
            <TextInput value={this.props.email} 
                       style={ styles.input } 
                       placeholder="E-mail" 
                       placeholderTextColor="#fff" 
                       onChangeText={text => this.props.changeEmail(text)}/>

            <TextInput secureTextEntry 
                       value={this.props.password} 
                       style={ styles.input } 
                       placeholder="Senha" 
                       placeholderTextColor="#fff" 
                       onChangeText={text => this.props.changePassword(text)}/>

            <Text style={ styles.messageError }>{ this.props.loginError }</Text>
            <TouchableHighlight onPress={ () => Actions.formRegister() }>
              <Text style={ styles.messageSignup }>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={ styles.buttonContainer } >
            { this.renderBtnAccess() }
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
    loginError: state.AuthenticationReducer.loginError,
    loadingLogin: state.AuthenticationReducer.loadingLogin
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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: "#fff"
  },
  messageSignup: {
    fontSize: 18,
    color: "#fff"
  },
  messageError: {
    fontSize: 18,
    color: '#ff0000'
  },  
  inputContainer: {
    flex: 2
  },
  input: {
    fontSize: 20,
    height: 45
  },
  buttonContainer: {
    flex: 2
  }
})

export default connect(mapStateToProps, { changeEmail, changePassword, authenticateUser })(formLogin)
