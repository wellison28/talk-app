import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes'
import reducers from './reducers'

class App extends Component {
  componentWillMount(){
    
    firebase.initializeApp({
      apiKey: "AIzaSyBat5Qokq0-eLZyy2BTHRzIi6AsXvH7dc4",
      authDomain: "talk-app-af097.firebaseapp.com",
      databaseURL: "https://talk-app-af097.firebaseio.com",
      projectId: "talk-app-af097",
      storageBucket: "talk-app-af097.appspot.com",
      messagingSenderId: "917230962555"
    });    
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <Routes />
      </Provider>
    )    
  }
} 

export default App;