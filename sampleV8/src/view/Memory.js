import React, {Fragment} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Entrance extends React.Component {
    constructor(props){
        super(props);
        this.state={
            big:[]
        }
    }

    render() {
        return (
            <View style={{flex: 1, direction: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.text}>当前big含有{this.state.big.length}项</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        let big=this.state.big;
                        big.push(new Array(999999).join('-'));
                        this.setState({
                            big:big
                        })
                    }}>
                    <Text style={styles.buttonHint}>点击添加记录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        let big=this.state.big;
                        big.pop();
                        this.setState({
                            big:big
                        })
                    }}>
                    <Text style={styles.buttonHint}>点击移除记录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('LongList', {num: 5000, length: 99999})}>
                    <Text style={styles.buttonHint}>进入超大列表</Text>
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