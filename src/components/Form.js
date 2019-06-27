import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    home() {
        Actions.home()
    }
    bankdetails(){
        Actions.bankdetails()
    }

    login(){
            Actions.login()
        }



    saveData =async()=>{
        const {email, password} = this.state;

        let loginDetails={
            email: email,
            password: password
        }

        if (this.props.type !== 'Login'){
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert('You successfully registered. Email: '+email+' password: '+password);
            this.login();
        }
        else if (this.props.type == 'Login'){
            try {
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.email != null && ld.password != null){
                    if (ld.email == email && ld.password == password) {
                        alert('Go in')
                    }
                    else {
                        //AsyncStorage.removeItem('loginDetails')
                        alert ('Email and password does not exist');
                    }
                }
            }

            catch (error) {
                alert(error)
            }
        }
    }

    showData = async()=>{
        let loginDetail = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ld.email+' password: '+ld.password);
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid="#596164"
                placeholder="Email"
                placeholderTextColor = "#000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid="#596164"
                selectionColor="#fff"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#000"
                ref={(input) => this.password = input}
                />
                <ImageBackground
                    imageStyle={{ borderTopLeftRadius: 0, borderBottomRightRadius: 20, borderTopRightRadius: 0, borderBottomLeftRadius: 20,}}

                    style={styles.rect4}
                    source={require("./assets/images/Gradient_VKqVJdq.png")}>

                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                                    </TouchableOpacity>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 50,
        position: 'absolute',

    },
    inputBox: {
        height: 60,
        paddingLeft: 6,
        width: 350,
        margin: 15
    },
    button: {
        width: 100,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        backgroundColor: 'rgba(67,219,233,1)',
        top: 27

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
    rect4: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 380,
        height: 54,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      },
});


/*<TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>*/
