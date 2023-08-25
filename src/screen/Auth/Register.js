import { View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator, Linking, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '@ui-kitten/components'
// import { TextInput } from '@react-native-material/core'
import Logo from '../../../assets/logo.png'
import WhatsIcon from '../../../assets/whats-app.svg'
import axiosClient from '../../api/axios-client'
import Snackbar from 'react-native-snackbar';
import { Button, TextInput } from 'react-native-paper';

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [loading, setLoading] = useState(false)
    const [hasMobileErrors, setMobileErrors] = useState(false)
    const [hasPasswordErrors, setPasswordErrors] = useState(false)
    const [hasNameErrors, setNameErrors] = useState(false)

    const onPress = () => {
        if (name.length === 0) {
            Alert.alert('Reddy Anna', 'Please enter your name')
            setNameErrors(!hasNameErrors)
            return
        }
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
        setLoading(true)
        axiosClient()
            .post('user/register', {
                "firstName": name,
                "lastName": "Kumar",
                "email": `${name}@gmail.com`,
                "mobile": mobileNumber,
                "password": password
            },
                {
                    headers: 'Content-Type: application/json',
                }
            ).then(async res => {
                setLoading(false)
                navigation.navigate('Home')
                Snackbar.show({
                    text: 'User Register Successfully',
                    duration: Snackbar.LENGTH_SHORT,
                });
                setName('')
                setMobileNumber('')
                setPassword('')
            }).catch(() => {
                setLoading(false)
                Snackbar.show({
                    text: 'User Already Register',
                    duration: Snackbar.LENGTH_SHORT,
                })
            })

        // makeRequest({
        //     url: `localhost:5000/api/user/register`,
        //     method: 'POST',
        //     body: {
        //         "firstName": "Anil",
        //         "lastName": "Kumar",
        //         "email": "Anil.Kumar@truworth.com",
        //         "mobile": "9057921046",
        //         "password": "Truworth@123"
        //     },
        //     onSuccess: data => {
        //         console.log(data.response);
        //     },
        //     onFailure: err => {
        //         console.log(err);
        //     }
        // })
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

                    <View style={{ paddingTop: 100, paddingBottom: 28, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Logo} style={{
                            width: win.width,
                            height: 100 * ratio, //362 is actual height of image
                            resizeMode: 'contain',
                        }} />
                    </View>

                    <Text style={{ fontSize: 18, color: '#d8b664', padding: 8 }}>Welcome Back Register</Text>

                    <TextInput
                        // label=""
                        mode="outlined"
                        value={name}
                        style={{
                            padding: 5, backgroundColor: 'transparent',
                            marginHorizontal: 8
                        }}
                        textColor='#d8b664'
                        onChangeText={(e) => setName(e)}
                        textContentType="telephoneNumber"
                        returnKeyType="next"
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                        error={hasNameErrors}
                        placeholder="Enter Name"
                        placeholderTextColor={'#d8b664'}
                        clearTextOnFocus={true}
                        // outlineColor='#d8b664'
                        activeOutlineColor='#d8b664'
                    />


                    <TextInput
                        // label=""
                        mode="outlined"
                        value={mobileNumber}
                        style={{
                            padding: 5, backgroundColor: 'transparent',
                            marginHorizontal: 8, marginTop: 16
                        }}
                        textColor='#d8b664'
                        onChangeText={(e) => setMobileNumber(e)}
                        textContentType="telephoneNumber"
                        returnKeyType="next"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        error={hasMobileErrors}
                        placeholder="Enter Mobile Number"
                        placeholderTextColor={'#d8b664'}
                        clearTextOnFocus={true}
                        // outlineColor='#d8b664'
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
                        textColor='#d8b664'
                        onChangeText={(e) => setPassword(e)}
                        textContentType="telephoneNumber"
                        returnKeyType="next"
                        keyboardType="default"
                        autoCapitalize="none"
                        error={hasPasswordErrors}
                        placeholder="Enter Password"
                        placeholderTextColor={'#d8b664'}
                        clearTextOnFocus={true}
                        secureTextEntry={true}
                        // outlineColor='#d8b664'
                        activeOutlineColor='#d8b664'

                    />


                    {/* // <TextInput
                    //     value={name}
                    //     variant="standard"
                    //     style={{ padding: 8 }}
                    //     placeholder='Enter Name'
                    //     placeholderTextColor={'#d8b664'}
                    //     inputStyle={{ color: 'white' }}
                    //     onChangeText={(value) => { setName(value) }}
                    // /> */}

                    {/* <TextInput
                        value={mobileNumber}
                        variant="standard"
                        style={{ padding: 8 }}
                        placeholder='Enter Mobile Number'
                        placeholderTextColor={'#d8b664'}
                        inputStyle={{ color: 'white' }}
                        onChangeText={(value) => { setMobileNumber(value) }}
                    />

                    <TextInput
                        value={password}
                        variant="standard"
                        style={{ padding: 8 }}
                        placeholder='Enter Password'
                        placeholderTextColor={'#d8b664'}
                        inputStyle={{ color: 'white' }}
                        onChangeText={(value) => { setPassword(value) }}
                    /> */}

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#d8b664',
                            alignItems: 'center', padding: 16,
                            borderRadius: 4, marginHorizontal: 8, marginTop: 22
                        }}
                        disabled={(name.length < 0 && mobileNumber.length < 0 && password.length < 0)}
                        onPress={() => onPress()}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}>CONFIRM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ flexDirection: 'row', padding: 8, marginVertical: 8 }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={{ fontSize: 16, color: '#d8b664' }}>
                            Already Register Account ?
                        </Text>
                        <Text style={{ fontSize: 16, color: 'white', marginStart: 8 }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#d8b664', alignItems: 'center',
                            padding: 16, borderRadius: 4, margin: 8,
                            flexDirection: 'row', justifyContent: 'center'
                        }}
                        onPress={clickOnWhatsAppBtn}
                    >
                        <WhatsIcon height={25} width={25} />
                        <Text style={{
                            fontSize: 14, fontWeight: '600',
                            color: '#000', marginLeft: 12
                        }}>
                            WHATS APP
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            }
        </Layout>
    )
}

export default Register
