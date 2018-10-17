import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
  <View style={ styles.mainContainer }>
    <View style={ styles.inputContainer }>
      <TextInput placeholder="E-mail" onChange={ () => false } style={ styles.input }/>
    </View>

    <View style={ styles.btnContainer }>
      <Button title="Adicionar" color="#115e54" onPress={ () => false }/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  inputContainer: { 
    flex: 1, 
    justifyContent: 'center'
  },
  input: { 
    fontSize: 20, 
    height: 45 
  },
  btnContainer: { 
    flex: 1 
  }
})