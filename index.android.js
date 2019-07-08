/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import loginComponent from './app/components/login'
import mainComponent from './app/components/main'
import productListComponent from './app/components/productList'

import { createStackNavigator } from 'react-navigation'

var myNavigator = createStackNavigator({
  login: {
    screen: loginComponent
  },
  main: {
    screen: mainComponent
  },
  productList: {
    screen: productListComponent
  }
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
