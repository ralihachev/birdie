import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, ImageBackground } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Form from '../components/Form';

export default class Login extends Component {
    signup() {
        Actions.signup()
    }
    render() {
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 64, fontWeight: '200', fontFamily: 'sans-serif-thin', marginTop: -5}}>Birdie</Text>
                <ImageBackground
                    imageStyle={{ borderTopLeftRadius: 0, borderBottomRightRadius: 100, borderTopRightRadius: 100, borderBottomLeftRadius: 0,}}
                    style={styles.rect}
                    source={require("../components/assets/images/Gradient_GHpuQVp.png")}>
                    <Text style={styles.login}>Login</Text>
                </ImageBackground>

                <View style={{width: 50, height: 50, backgroundColor: '#fff', transform: [ {rotate: "45.00deg"}], marginTop: 115, marginLeft: -200}}></View>

                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: '#000',
        fontSize:16,
        opacity: 0.5
    },
    signupButton: {
        color: '#ff44b4',
        fontSize:20,
        fontWeight: '500',
    },
    rect: {
        left: 0,
        width: Dimensions.get('window').width/2,
        height: 480,
        position: "absolute",
        shadowColor: "#202020",
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 0,
    },

    login: {
        fontWeight: '200',
        fontSize: 32,
        color: '#fff',
        elevation: 100,
        marginTop: 50,
        marginLeft: 20,

    }
});