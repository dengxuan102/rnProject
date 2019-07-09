import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'

export default class productComponent extends Component {

    constructor() {
        super();
        this.state = { productList: [] }
    }

    componentDidMount() {
        let url = 'http://192.168.1.154:8080/product/list';
        fetch(url).then((response) => {
            return response.json();
        }).then(res => {
            // console.log(res.data);
            this.setState({ productList: res.data });
            console.log(this.state.productList);
        })
    }

    handlePress = (count) => {
        alert(`该商品收买了${count}`)
    }

    showItem = (info) => {
        return <TouchableOpacity onPress={() => this.handlePress(info.item.sold_count)} style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <Image source={{ uri: "http://192.168.1.154:8080/" + info.item.pic }} style={{ width: 80, height: 80, borderRadius: 40 }}></Image>
            <Text>{info.item.title}</Text>
        </TouchableOpacity >
    }


    render() {
        return <FlatList data={this.state.productList} renderItem={this.showItem}></FlatList>
    }
}