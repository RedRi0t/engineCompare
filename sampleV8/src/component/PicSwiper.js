import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const ScreenWidth=Dimensions.get('window').width;

export default class PicSwiper extends Component {

    constructor(props){
        super(props);
        this.state={
            direction:'x'
        }
    }

    render(){
        const pics=[];
        const length=2;
        const picUrl0='../res/pic0.jpg';
        const picUrl1='../res/pic1.jpg';
        pics.push(
            <Image
                key={0}
                style={styles.pic}
                source={require(picUrl0)}
            />
        );
        pics.push(
             <Image
                key={1}
                style={styles.pic}
                source={require(picUrl1)}
             />
        );

        return(
        <ScrollView
            style={styles.picWrapper}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            automaticallyAdjustContentInsets={false}
            >
            {pics}
        </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    pic:{
        height:300,
        width:ScreenWidth
    },
    picWrapper:{
        flex:1
    }
});