import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native'

export default class productComponent extends Component {

    constructor() {
        super();
        this.state = {
            productList: [],
            currPage: 1
        }
    }

    componentDidMount() {
        let url = 'http://192.168.1.154:8080/product/list';
        fetch(url).then((response) => {
            return response.json();
        }).then(res => {
            // console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                result.data[i].key = i
            }
            this.setState({ productList: res.data });
            // console.log(this.state.productList);
        })
    }

    handlePress = (lid) => {
        // alert(`该商品收买了${count}`)
        this.props.navigation.push('detail', { id: lid })
    }

    handleEndReached = () => {
        //获取要请求的页码
        var pno = this.state.currPage;
        pno++;
        // 边界值判断
        if (pno > 5)
            return

        var url = 'http://192.168.1.154:8080/product/list?pro?=' + pno;
        fetch(url).then(response => response.json()).then(res => {
            // console.log(res)
            this.setState({ currPage: pno })
            // 拼接请求后的数据 concat
            let oldList = this.state.productList;
            let newList = oldList.concat(res.data);
            for (let i = 0; i < newList.length; i++) {
                newList[i].key = i
            }
            this.setState({ productList: newList })
        })
    }

    showItem = (info) => {
        return <TouchableOpacity onPress={() => this.handlePress(info.item.lid)} style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <Image source={{ uri: "http://192.168.1.154:8080/" + info.item.pic }} style={{ width: 80, height: 80, borderRadius: 40 }}></Image>
            <Text>{info.item.title}</Text>
        </TouchableOpacity>
    }


    render() {
        return <FlatList onEndReached={this.handleEndReached} data={this.state.productList} renderItem={this.showItem} ></FlatList>
    }
}