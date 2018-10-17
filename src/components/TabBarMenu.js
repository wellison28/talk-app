import React from 'react';
import { View, Text , StatusBar, StyleSheet, Image } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View style={ styles.mainContainer }>
    <StatusBar backgroundColor="#114d44"/>
    <View style={ styles.header }>
      <View style={ styles.titleContainer }>
        <Text style={ styles.title }>WhatsApp Clone</Text>
      </View>
      <View style={ styles.addContacContainer }>
        <View style={ styles.addContactImg }>
          <Image source={ require('../img/adicionar-contato.png') }/>
        </View>
        <View style={ styles.logoutContainer }>
          <Text style={ styles.logoutText }>Sair</Text>
        </View>
      </View>
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
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  addContacContainer: { 
    flexDirection: 'row', 
    marginRight: 20 
  },
  addContactImg: { 
    width: 50, 
    justifyContent: 'center' 
  },
  logoutContainer: { 
    justifyContent: 'center' 
  },
  logoutText: { 
    fontSize: 20, 
    color: '#fff' 
  },
  tabBar: {
    backgroundColor: '#115e54',
    elevation: 0
  }
})