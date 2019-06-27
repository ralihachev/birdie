import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, ImageBackground, Picker } from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class BankDetails extends Component {

    home(){
        Actions.home()
    }
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    imageStyle={{ borderTopLeftRadius: 0, borderBottomRightRadius: 100, borderTopRightRadius: 100, borderBottomLeftRadius: 0,}}
                    style={styles.rect}
                    source={require("../components/assets/images/Gradient_GHpuQVp.png")}>
                    <Text style={styles.birdie}>Birdie</Text>
                </ImageBackground>
                <View style={styles.form}>
                    <Picker
                        style={{width: 350, height: 60, margin: 15, paddingLeft: 6, borderColor: '#000', borderWidth: 1}}
                        underlineColorAndroid="#596164">
                        <Picker.Item label="Select your bank" value="none"/>
                        <Picker.Item label="Aktia" value="Aktia"/>
                        <Picker.Item label="Nordea" value="Nordea"/>
                        <Picker.Item label="OP" value="OP"/>
                        <Picker.Item label="Handelsbanken" value="Handelsbanken"/>
                    </Picker>
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid="#596164"
                        selectionColor="#fff"
                        placeholder="Enter IBAN "
                        placeholderTextColor = "#000"
                    />

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={styles.buttonLeft}>
                            <Text style={styles.buttonText}>Add more</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRight}>
                            <Text style={styles.buttonText} onPress={this.home}>Confirm</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },

    rect: {
        left: 0,
        marginTop: -Dimensions.get('window').height/2,
        width: Dimensions.get('window').height/1.5,
        height: Dimensions.get('window').width,
        position: "relative",
        shadowColor: "#202020",
        shadowOffset: {
            width: 0,
            height: 0
        },
        transform: [
            {
                rotate: "90.00deg"
            }
        ],
        shadowRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 0,
    },

    birdie: {
        fontWeight: '200',
        fontSize: 64,
        fontFamily: 'sans-serif-thin',
        elevation: 100,
        marginRight: 100,
        marginTop: 60,
        transform: [
            {
                rotate: "-90.00deg"
            }
        ],
    },

    inputBox: {
        height: 60,
        paddingLeft: 6,
        width: 350,
        margin: 15
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 50,
        position: 'absolute',
    },

    buttonLeft: {
        width: 100,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        backgroundColor: 'rgba(67,219,233,1)',
        top: 27,
        marginLeft: 20
    },
    buttonRight: {
        width: 100,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        backgroundColor: 'rgba(67,219,233,1)',
        top: 27,
        marginRight: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '200',
        color: '#ffffff',
        textAlign: 'center',
    },
})