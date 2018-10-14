import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail } from '../actions/AutenticacaoActions';

const formLogin = props => {
  console.log(props)
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.titleContainer }>
        <Text style={ styles.title }>Whatsap Clone</Text>
      </View>
      <View style={ styles.inputContainer } >
        <TextInput value={props.email} style={ styles.input } placeholder="E-mail" onChangeText={texto => props.modificaEmail(texto)}/>
        <TextInput value={props.senha} style={ styles.input } placeholder="Senha" />
        <TouchableHighlight onPress={ () => Actions.formCadastro() }>
          <Text style={ styles.messageSignup }>Ainda não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
      </View>
      <View style={ styles.buttonContainer } >
        <Button color="#115e54" title="Acessar" onPress={() => false } />
      </View>        
    </View>
  )
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    nome: state.AutenticacaoReducer.nome
  }
)

const styles = StyleSheet.create({
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
    fontSize: 25
  },
  messageSignup: {
    fontSize: 18
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

export default connect(mapStateToProps, { modificaEmail })(formLogin)
