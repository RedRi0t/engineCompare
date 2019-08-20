import React, {Component} from 'react';
import {
    Dimensions,
    FlatList,
    Text
} from 'react-native';

export default class LongList extends Component {
    constructor(props) {
        super(props);
        this._getData = this._getData.bind(this);
    }

    render() {
        return <FlatList
            style={{flex: 1}}
            data={this._getData()}
            renderItem={({item}) => <Text style={{width: Dimensions.get('window').width}}>{item.key}</Text>}
        />
    }

    _getData() {
        const data = [];
        const num = this.props.navigation.state.params.num || 0;
        const length = this.props.navigation.state.params.length || 0;
        for (let i = 0; i < num; i++) {
            data.push(
                {
                    key: i,
                    data: new Array(length).join('-')
                }
            )
        }
        return data;
    }
}