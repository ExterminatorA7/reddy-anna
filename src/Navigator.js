import React, { Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Auth/Login';
import Register from './screen/Auth/Register';
import Home from './screen/Home';
import WebViewScreen from './screen/WebView';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle={'dark-content'} />
                <NavigationContainer>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen name="Login" component={Login} options={{ presentation: 'modal', animation: 'slide_from_left' }} />
                        <Screen name="Register" component={Register} options={{ presentation: 'modal', animation: 'slide_from_right' }} />
                        <Screen name="Home" component={Home} />
                        <Screen name="WebView" component={WebViewScreen} />
                    </Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Fragment>
    )
}

export default AppNavigator;
