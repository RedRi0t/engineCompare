import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

const styles=StyleSheet.create({
    icon: {
        height:70,
        width:70,
        backgroundColor:'skyblue'
    },
    iconWrapper:{
        alignItems:'center',
        justifyContent:'center',
    },
    iconRow:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    iconSet:{
        justifyContent:'space-evenly',
        flex:1,
    }
});

const row = 3;
const column = 4;

const tipSet=['a','b','c']

export default class IconSet extends Component {

    render(){
        const iconSet=[];
        for(let i=0;i<row;i++){
            let singleRow=[];
            for(let j=0;j<column;j++){
                singleRow.push(
                            <View key={j}
                                  style={styles.iconWrapper}>
                            <TouchableOpacity
                                style={styles.icon}>
                                <Image
                                        style={{height:70,width:70}}
                                       source={require('../res/wechat.jpg')}/>
                                </TouchableOpacity>
                                    <Text>{global.HermesInternal!=null?'HermesOn':
                                        global._v8runtime!=null?'v8On':'jscOn'}</Text>
                            </View>
                                );
            }
            iconSet.push(
                <View style={styles.iconRow}
                      key={i}>
                    {singleRow}
                </View>
            )
        }

        return(
            <View style={styles.iconSet}>
                {iconSet}
            </View>
        )
    }
}