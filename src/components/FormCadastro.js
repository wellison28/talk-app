import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => {
  console.log(props)
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.inputsContainer }>
        <TextInput value={props.nome} placeholder="Nome" style={ styles.input } />
        <TextInput value={props.email} placeholder="E-mail" style={ styles.input } /> 
        <TextInput value={props.senha} placeholder="Senha" style={ styles.input } />
      </View>
      <View style={ styles.buttonContainer } >
        <Button color="#115e54" title="Cadastrar" onPress={ () => false } />
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

export default connect(mapStateToProps, null)(formCadastro)