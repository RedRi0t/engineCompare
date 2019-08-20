import React, {Fragment} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Entrance extends React.Component {
    render() {
        return (
            <View style={{flex: 1, direction: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.text}>
                    {global.HermesInternal != null ? 'HermesOn' :
                        global._v8runtime != null ? 'v8On' : 'jscOn'}
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LongList',{num:10000,length:99})}
                    style={styles.button}>
                    <Text style={styles.buttonHint}>简单列表测试</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LongList',{num:5000,length:99999})}
                    style={styles.button}>
                    <Text style={styles.buttonHint}>超大列表测试</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Memory')}
                    style={styles.button}>
                    <Text style={styles.buttonHint}>添加内存测试</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('PicList')}
                    style={styles.button}>
                    <Text style={styles.buttonHint}>图片列表测试</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        text: {
            color: '#05a5d8',
            fontSize: 30,
            margin: 10
        },
        button: {
            backgroundColor: '#1E90FF',
            padding: 10,
            margin: 5
        },
        buttonHint: {
            color: '#FFFFFF'
        }
    }
);
