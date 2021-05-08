import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../components/Home'
import Detail from '../screens/Detail'
import Login from '../components/Login'
import Register from '../components/Register'


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home"       component={Home}/>
            <Stack.Screen name="Login"      component={Login}/>
            <Stack.Screen name="Detail"     component={Detail}/>
            <Stack.Screen name="Register"   component={Register}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;