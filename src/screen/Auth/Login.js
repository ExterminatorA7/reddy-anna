import { View, Text, TouchableOpacity, Image, Dimensions, Alert, ScrollView, Linking } from 'react-native'
import { Layout } from '@ui-kitten/components';
// import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { TextInput } from 'react-native-paper';
import Logo from '../../../assets/logo.png'
import React, { useState } from 'react'
import axiosClient from '../../api/axios-client';
import Snackbar from 'react-native-snackbar';
import { ActivityIndicator } from '@react-native-material/core';
import WhatsIcon from '../../../assets/whats-app.svg'

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Login = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [hasMobileErrors, setMobileErrors] = useState(false)
    const [hasPasswordErrors, setPasswordErrors] = useState(false)
    const [loading, setLoading] = useState(false)

    const onConfirm = () => {
        if (mobileNumber.length === 0) {
            Alert.alert('Reddy Anna', 'Please enter your register mobile number')
            setMobileErrors(!hasMobileErrors)
            return
        }
        if (mobileNumber.length !== 10) {
            Snackbar.show({
                text: 'Please insert 10 digit mobile number',
                duration: Snackbar.LENGTH_SHORT,
            })
            setMobileErrors(true)
            return
        }
        if (password.length === 0) {
            Snackbar.show({
                text: 'Please insert your password',
                duration: Snackbar.LENGTH_SHORT,
            })
            setPasswordErrors(true)
            return
        }
        setPasswordErrors(false)
        setMobileErrors(false)
        setLoading(true)
        axiosClient()
            .post('user/login', {
                "mobile": mobileNumber,
                "password": password
            },
                {
                    headers: 'Content-Type: application/json',
                }
            ).then(async res => {
                console.log(res);
                setLoading(false)
                navigation.navigate('Home')
                Snackbar.show({
                    text: 'Login Successfully',
                    duration: Snackbar.LENGTH_SHORT,
                });
                setPassword('')
                setMobileNumber('')

            }).catch(err => {
                setLoading(false)
                setMobileErrors(true)
                setPasswordErrors(true)
                Snackbar.show({
                    text: `${err.response.data.message} ! Please Register Your Account`,
                    duration: Snackbar.LENGTH_SHORT,
                })
            })
    }

    const clickOnWhatsAppBtn = () => {
        // Check for perfect 10 digit length
        // if (mobileNumber.length !== 10) {
        //     Alert.alert('Please insert correct WhatsApp number');
        //     return;
        // }
        // Using 91 for India
        // You can change 91 with your country code
        let url =
            'whatsapp://send?text=' +
            'I need id' +
            '&phone=91' + '7733040777';
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                Alert.alert('Make sure Whatsapp installed on your device');
            });
    }


    return (
        <Layout style={{ flex: 1, backgroundColor: '#000' }}>

            {loading ?
                <ActivityIndicator size={'large'} style={{ flex: 1, justifyContent: 'center' }} />
                :
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, padding: 16 }}
                >
                    <View style={{
                        paddingTop: 100, paddingBottom: 28,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={Logo} style={{
                            width: win.width,
                            height: 100 * ratio, //362 is actual height of image
                            resizeMode: 'contain',
                        }} />
                    </View>

                    <Text style={{
                        fontSize: 18,
                        color: '#d8b664', padding: 8
                    }}>Welcome Back! Login</Text>

                    <TextInput
                        // label=""
                        mode="outlined"
                        value={mobileNumber}
                        style={{
                            padding: 5, backgroundColor: 'transparent',
                            marginHorizontal: 8
                        }}
                        textColor='white'
                        onChangeText={(number) => setMobileNumber(number)}
                        textContentType="telephoneNumber"
                        returnKeyType="next"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        error={hasMobileErrors}
                        placeholder="Enter Mobile Number"
                        placeholderTextColor={'#d8b664'}
                        clearTextOnFocus={true}
                        activeOutlineColor='#d8b664'
                    />

                    <TextInput
                        // label=""

                        mode="outlined"
                        value={password}
                        style={{
                            padding: 5, backgroundColor: 'transparent',
                            marginHorizontal: 8, marginTop: 16
                        }}
                        textColor='white'
                        onChangeText={(el) => setPassword(el)}
                        textContentType="password"
                        returnKeyType="next"
                        autoCapitalize="none"
                        error={hasPasswordErrors}
                        placeholder="Enter Password"
                        placeholderTextColor={'#d8b664'}
                        secureTextEntry={true}
                        activeOutlineColor='#d8b664'
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            marginHorizontal: 8, padding: 16,
                            alignItems: 'center', borderRadius: 4,
                            backgroundColor: '#d8b664', marginTop: 22
                        }}
                        onPress={onConfirm}
                    >
                        <Text style={{
                            fontSize: 14,
                            color: '#000',
                            fontWeight: '800',
                        }}>CONFIRM</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ flexDirection: 'row', padding: 4, marginHorizontal: 8, marginTop: 16 }}
                        onPress={() => { navigation.navigate('Register') }}
                    >
                        <Text style={{ fontSize: 16, color: '#d8b664' }}>
                            New User ?
                        </Text>
                        <Text style={{ fontSize: 16, color: 'white', marginStart: 8 }}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#d8b664', alignItems: 'center',
                            padding: 16, borderRadius: 4, margin: 8, marginTop: 16,
                            flexDirection: 'row', justifyContent: 'center'
                        }}
                        onPress={clickOnWhatsAppBtn}
                    >
                        <WhatsIcon height={25} width={25} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#000', marginLeft: 12 }}>WHATS APP</Text>
                    </TouchableOpacity>

                </ScrollView>
            }
        </Layout >
    )
}

const InputStyle = () => {
    return (
        <>
            {/* <TextInput
    variant="standard"
    style={{ padding: 8 }}
    placeholder='Enter Mobile Number'
    placeholderTextColor={'#d8b664'}
    inputStyle={{ color: 'white' }}
    error={true} //only accept true or false value
/> */}

            {/* <Input
    placeholder='Enter Mobile Number'
    style={{ padding: 8 }}
/> */}

            {/* <TextInput
    variant="standard"
    style={{ padding: 8 }}
    placeholder='Enter Password'
    placeholderTextColor={'#d8b664'}
    inputStyle={{ color: 'white' }}
    secureTextEntry={true}
/> */}

            {/* <Input
    placeholder='Enter Password'
    style={{ padding: 8 }}
/> */}
        </>
    )
}

export default Login
