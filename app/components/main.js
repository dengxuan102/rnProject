import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class mainComponent extends Component {


  render() {
    return <View style={styles.container}>
      {/* 第一行 */}
      <View style={styles.rowFlex}>
        <View style={styles.item}>
          <Text style={styles.myFont}>200</Text>
          <Text>当日PC端PV量</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.myFont}>200</Text>
          <Text>当日移动端端PV量</Text>
        </View>
      </View>
      {/* 第二行 */}
      <View style={styles.rowFlex}>
        <View style={styles.item}>
          <Text style={styles.myFont}>200</Text>
          <Text>已完成订单总数</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.myFont}>200</Text>
          <Text>当日APP下载量</Text>
        </View>
      </View>
      {/* 第三行 */}
      <View style={styles.rowFlex}>
        <TouchableOpacity style={styles.myImgCol}>
          <Image source={require('../../assets/img/order.png')}></Image>
          <Text>订单管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myImgCol}>
          <Image source={require('../../assets/img/user.png')}></Image>
          <Text>用户管理</Text>
        </TouchableOpacity>
      </View>
      {/* 第四行 */}
      <View style={styles.rowFlex}>
        <TouchableOpacity style={styles.myImgCol}>
          <Image source={require('../../assets/img/product.png')}></Image>
          <Text>商品管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myImgCol}>
          <Image source={require('../../assets/img/setting.png')}></Image>
          <Text>设置</Text>
        </TouchableOpacity>
      </View>

    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderBottomWidth: 2, borderRightWidth: 2, height: 100, flex: 1
  },
  imgRow: {
    flex: 1
  },
  myFont: {
    fontSize: 30,
    color: 'green'
  },
  myImgCol: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 200
  }
})