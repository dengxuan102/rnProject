import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

export default class detailComponent extends Component {

    constructor() {
        super();
        this.state = {
            lid: 0,
            detailList: []
        }
    }
    componentDidMount() {
        let lid = this.props.navigation.getParam('id');
        console.log(lid)
        let url = 'http://192.168.1.154:8080/product/detail/?lid=' + lid;
        fetch(url).then(response => response.json()).then(res => {
            this.setState({ detailList: res.details });
            console.log(res.details)
            console.log(this.state.detailList)
        })
    }

    render() {
        return <FlatList>

        </FlatList>
    }
}