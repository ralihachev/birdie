import React, { Component } from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PieChart from 'react-native-pie-chart';


export default class Home extends Component{
    render(){



        return(
            <View style={styles.container}>
            <View style={{padding: 20}}>
                <ImageBackground
                    style={styles.rect}
                    source={require("../components/assets/images/Gradient_GHpuQVp.png")}>
                </ImageBackground>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Icon name='user' size={25} color='white' iconStyle={{margin: 15}}/>
                    <Picker
                        style={{width: 150, color: 'white', marginTop: -15}}>
                            <Picker.Item label="Invested" value="invested"/>
                            <Picker.Item label="Balance" value="balance"/>
                     </Picker>
                    <Icon name='wallet' size={25} color='white' iconStyle={{marginLeft: 15}}/>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                    <TouchableOpacity style={{width: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff', opacity: 0.5}}>
                        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '200', color: '#fff'}}>Day</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff'}}>
                        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '200', color: '#fff'}}>Month</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff', opacity: 0.5}}>
                        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '200', color: '#fff'}}>Year</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    rect: {
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
    }
});

