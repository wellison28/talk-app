import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Talkings from './Talkings';
import Contacts from './Contacts';

export default class Main extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: Talkings,
    second: Contacts,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  }
});