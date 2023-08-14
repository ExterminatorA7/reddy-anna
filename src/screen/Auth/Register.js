import { View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '@ui-kitten/components'
import { TextInput } from '@react-native-material/core'
import Logo from '../../../assets/logo.png'
import WhatsIcon from '../../../assets/whats-app.svg'
import axiosClient from '../../api/axios-client'
import Snackbar from 'react-native-snackbar';

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [loading, setLoading] = useState(false)

    const onPress = () => {
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
                navigation.navigate('Login')
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

    return (
        <Layout style={{ flex: 1, backgroundColor: '#000' }}>

            {loading ?
                <ActivityIndicator size={'large'} style={{ flex: 1, justifyContent: 'center' }} />
                :
                <View style={{ backgroundColor: '#000', padding: 20 }}>

                    <View style={{ paddingTop: 100, paddingBottom: 28, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Logo} style={{
                            width: win.width,
                            height: 100 * ratio, //362 is actual height of image
                            resizeMode: 'contain',
                        }} />
                    </View>

                    <Text style={{ fontSize: 18, color: '#d8b664', padding: 8 }}>Welcome Back Register</Text>

                    <TextInput
                        value={name}
                        variant="standard"
                        style={{ padding: 8 }}
                        placeholder='Enter Name'
                        placeholderTextColor={'#d8b664'}
                        inputStyle={{ color: 'white' }}
                        onChangeText={(value) => { setName(value) }}
                    />

                    <TextInput
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
                    />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#d8b664',
                            alignItems: 'center', padding: 12,
                            borderRadius: 4, margin: 8
                        }}
                        disabled={(name.length < 0 && mobileNumber.length < 0 && password.length < 0)}
                        onPress={() => onPress()}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#000' }}>CONFIRM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ flexDirection: 'row', padding: 8 }}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={{ color: '#d8b664' }}>
                            Already Register Account ?
                        </Text>
                        <Text style={{ color: 'white', marginStart: 8 }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ backgroundColor: '#d8b664', alignItems: 'center', padding: 12, borderRadius: 4, margin: 8, flexDirection: 'row', justifyContent: 'center' }}
                    >
                        <WhatsIcon height={25} width={25} />
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#000', marginLeft: 12 }}>WHATS APP</Text>
                    </TouchableOpacity>
                </View>
            }
        </Layout>
    )
}

export default Register
