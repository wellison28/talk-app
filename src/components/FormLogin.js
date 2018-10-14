import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from '../actions/AuthenticationActions';

const formLogin = props => {
  return (
    <ImageBackground source={require('../img/bg.png')} style={ styles.background }>
      <View style={ styles.mainContainer }>
        <View style={ styles.titleContainer }>
          <Text style={ styles.title }>Whatsap Clone</Text>
        </View>
        <View style={ styles.inputContainer } >
          <TextInput value={props.email} 
                     style={ styles.input } 
                     placeholder="E-mail" 
                     placeholderTextColor="#fff" 
                     onChangeText={text => props.changeEmail(text)}/>

          <TextInput secureTextEntry 
                     value={props.password} 
                     style={ styles.input } 
                     placeholder="Senha" 
                     placeholderTextColor="#fff" 
                     onChangeText={text => props.changePassword(text)}/>

          <TouchableHighlight onPress={ () => Actions.formRegister() }>
            <Text style={ styles.messageSignup }>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.buttonContainer } >
          <Button color="#115e54" title="Acessar" onPress={() => false } />
        </View>        
      </View>
    </ImageBackground>
  )
}

const mapStateToProps = state => (
  {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password
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

export default connect(mapStateToProps, { changeEmail, changePassword })(formLogin)
