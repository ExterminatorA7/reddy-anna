import { View, Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '@ui-kitten/components'
import { TextInput } from '@react-native-material/core'
import Logo from '../../../assets/logo.png'
import WhatsIcon from '../../../assets/whats-app.svg'
import axiosClient from '../../api/axios-client'


const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')

    const [loding, setLoading] = useState(false)

    // const { makeRequest } = useRequest()

    const onPress = () => {

        axiosClient()
            .post('user/register', {
                "firstName": name,
                "lastName": "Kumar",
                "email": "Sunil.Kumar@truworth.com",
                "mobile": mobileNumber,
                "password": password
            },
                {
                    headers: 'Content-Type: application/json',
                }
            ).then(async res => {
                const { } = res.data
                console.log(res.data);
            }).catch(err => {
                Alert.alert('The Reddy Anna', err.response.data.message)
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
                    // label="Enter Mobile Number"
                    variant="standard"
                    style={{ padding: 8 }}
                    placeholder='Enter Name'
                    placeholderTextColor={'#d8b664'}
                    inputStyle={{ color: 'white' }}
                />

                <TextInput
                    // label="Enter Mobile Number"
                    variant="standard"
                    style={{ padding: 8 }}
                    placeholder='Enter Mobile Number'
                    placeholderTextColor={'#d8b664'}
                    inputStyle={{ color: 'white' }}
                />

                {
                    /* <Input
                    placeholder='Enter Mobile Number'
                    style={{ padding: 8 }}
                    /> */
                }

                <TextInput
                    // label="Label"
                    variant="standard"
                    style={{ padding: 8 }}
                    placeholder='Enter Password'
                    placeholderTextColor={'#d8b664'}
                    inputStyle={{ color: 'white' }}
                />

                {
                    /* <Input
                    placeholder='Enter Password'
                    style={{ padding: 8 }}
                    /> */
                }

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#d8b664',
                        alignItems: 'center', padding: 12,
                        borderRadius: 4, margin: 8
                    }}
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
        </Layout>
    )
}

export default Register
