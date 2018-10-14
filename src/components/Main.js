import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = props => (
  <View style={ styles.mainContainer }>
    <Text>Pagina Principal</Text>
  </View>
)

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
  }
})