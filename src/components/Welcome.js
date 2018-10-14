import React from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default props => (
  <ImageBackground style={ styles.background } source={ require('../img/bg.png') }> 
    <View style={ styles.mainContainer }>
      <View style={ styles.topContainer }>
        <Text style={ styles.message }>Seja Bem-Vindo</Text>
        <Image source={require('../img/logo.png')}/>
      </View>
      <View styles={ styles.bottomContainer }>
        <Button title="Fazer Login" onPress={ () => Actions.formLogin() }/>
      </View>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
  },
  background: {
    width: null,
    flex: 1
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1
  },
  message: {
    fontSize: 20,
    color: '#fff'
  }
})