import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {View, Text} from 'react-native';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import BankDetails from './pages/BankDetails';


export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={true}
                navigationBarStyle={{display: 'none'}}
                titleStyle={{color: 'white'}}>
                <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}


/*<Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                <Scene key="home" component={Home} title="Home"/>*/