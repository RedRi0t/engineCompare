import React, {Component} from 'react';
import {
    Dimensions,
    FlatList,
    Text,
    Image,
    StyleSheet,
    View
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const pic0 = require('../res/pic0.jpg');
const pic1 = require('../res/pic1.jpg');
const pic2 = require('../res/pic2.jpg');
const pic3 = require('../res/pic3.jpg');
const pic4 = require('../res/pic4.jpg');
const pics = [pic0, pic1, pic2, pic3, pic4]

export default class PicList extends Component {
    constructor(props) {
        super(props);
        this._getData = this._getData.bind(this);
    }

    render() {
        return <FlatList
            style={{flex: 1}}
            data={this._getData()}
            renderItem={({item}) => {
                return (
                    <View>
                        <Text>{item.key}</Text>
                        <Image
                            key={item.key}
                            style={styles.pic}
                            source={item.data}
                        />
                    </View>)
            }}
        />
    }

    _getData() {
        const data = [];
        for (let i = 0; i < 1000; i++) {
            console.log('init data ' + i);
            data.push(
                {
                    key: i + "",
                    data: pics[i % 5]
                }
            )
        }
        return data;
    }
}

const styles = StyleSheet.create({
    pic: {
        height: 300,
        width: ScreenWidth,
        marginBottom: 10
    }
});