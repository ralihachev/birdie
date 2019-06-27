import React, { Component } from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 64, fontWeight: '200', fontFamily: 'sans-serif-thin'}}>Birdie</Text>
                <ImageBackground
                    imageStyle={{ borderTopLeftRadius: 0, borderBottomRightRadius: 100, borderTopRightRadius: 100, borderBottomLeftRadius: 0,}}
                    style={styles.rect}
                    source={require("../components/assets/images/Gradient_GHpuQVp.png")}>
                    <Text style={styles.signup}>Sign up</Text>
                </ImageBackground>
                <View style={{width: 50, height: 50, backgroundColor: '#fff', transform: [ {rotate: "45.00deg"}], marginTop: 115, marginRight: -200}}></View>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
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
        flexDirection: 'row'
    },
    signupText: {
        color: '#000',
        fontSize:16,
        opacity: 0.5
    },
    signupButton: {
          color: '#ff44b4',
          fontSize:20,
          fontWeight: '500'
    },
    rect: {
        left: Dimensions.get('window').width/2,
        width: Dimensions.get('window').width/2,
        height: 477.75,
        position: "absolute",
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 0,
        transform: [
          {
            rotate: "180.00deg"
          }
        ]
      },

      signup: {
              fontWeight: '200',
              fontSize: 32,
              color: '#fff',
              elevation: 100,
              marginTop: 380,
              marginRight: 90,
              transform: [
                        {
                          rotate: "180.00deg"
                        }
                      ]
          }
});