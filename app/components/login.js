import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

export default class loginComponent extends Component {

	render() {
		return <View>
			<Text>这是登陆页</Text>
			<Image source={require('../../assets/img/user.png')}></Image>
		</View>
	}
}