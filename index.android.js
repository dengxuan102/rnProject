/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import productComponent from './app/components/productList'
import loginComponent from './app/components/login'
import mainComponent from './app/components/main'
import detailComponent from './app/components/detail'
import { createStackNavigator } from 'react-navigation'

var myNavigator = createStackNavigator({
  product: {
    screen: productComponent
  },

  detail: {
    screen: detailComponent
  },
  main: {
    screen: mainComponent
  },
  login: {
    screen: loginComponent
  },
})

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
