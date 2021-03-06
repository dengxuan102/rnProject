import React, { Component } from 'react'
import { View, Text, TextInput, Button, Image, StyleSheet, ToastAndroid } from 'react-native'

export default class loginComponent extends Component {

  constructor() {
    super();
    this.state = { userName: '', pwd: '' }
  }

  usernameChangeText = (msg) => {
    this.setState({ userName: msg })
  }
  pwdChangeText = (msg) => {
    this.setState({ pwd: msg })
    // console.log(this.state.pwd)
  }

  handleLogin = () => {
    if (this.state.userName == '') {
      ToastAndroid.showWithGravity(
        "请输入用户名",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } else if (this.state.pwd == '') {
      ToastAndroid.showWithGravity(
        "密码不能为空",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } else {
      // console.log(this.state.userName + " ---- " + this.state.pwd);
      var url = 'http://192.168.1.154:8080/user/login';
      var config = {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'uname=' + this.state.userName + '&upwd=' + this.state.pwd
      };
      fetch(url, config).then(response =>
        response.json()
      ).then(res => {
        if (res.code == 200) {
          this.props.navigation.navigate('main');
        } else {
          ToastAndroid.showWithGravity(
            "用户名或密码错误，请重输",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
          this.setState({ userName: '', pwd: '' })
        }
      })
    }
  }

  render() {
    return <View>
      <Text>这是登陆页</Text>
      <View style={styles.head}>
        <Image style={styles.headImage} source={require('../../assets/img/user.png')}></Image>
      </View>
      <TextInput autoFocus={true} value={this.state.userName} placeholder="请输入用户名" onChangeText={this.usernameChangeText}></TextInput>
      <TextInput secureTextEntry={true} value={this.state.pwd} placeholder="请输入密码" onChangeText={this.pwdChangeText}></TextInput>
      <Button title='登 陆' onPress={this.handleLogin}></Button>
    </View>
  }
}

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
  },
  headImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
})