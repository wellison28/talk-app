import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View style={ styles.mainContainer }>
    <View style={ styles.inputsContainer }>
      <TextInput placeholder="Nome" style={ styles.input } />
      <TextInput placeholder="E-mail" style={ styles.input } /> 
      <TextInput placeholder="Senha" style={ styles.input } />
    </View>
    <View style={ styles.buttonContainer } >
      <Button color="#115e54" title="Cadastrar" onPress={ () => false } />
    </View> 
  </View>
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
    paddingVertical: 10
  },
  buttonContainer: {
    flex: 1
  }
})