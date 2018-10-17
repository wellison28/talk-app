import React from 'react';
import { View, Text , StatusBar, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View style={ styles.mainContainer }>
    <StatusBar backgroundColor="#114d44"/>
    <View style={ styles.titleContainer }>
      <Text style={ styles.title }>WhatsApp Clone</Text>
    </View>
    <TabBar { ...props } style={ styles.tabBar }/>
  </View>
)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#115e54',
    elevation: 4,
    marginBottom: 6
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20
  },
  tabBar: {
    backgroundColor: '#115e54',
    elevation: 0
  }
})