import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Layout, Input, Button } from '@ui-kitten/components';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Logo from '../../../assets/logo.png'
import React from 'react'

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Login = ({ navigation }) => {
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

                <Text style={{ fontSize: 18, color: '#d8b664', padding: 8 }}>Welcome Back! Login</Text>

                <TextInput
                    variant="standard"
                    style={{ padding: 8 }}
                    placeholder='Enter Mobile Number'
                    placeholderTextColor={'#d8b664'}
                    inputStyle={{ color: 'white' }}
                    error={true} //only accept true or false value
                />

                {/* <Input
                    placeholder='Enter Mobile Number'
                    style={{ padding: 8 }}
                /> */}

                <TextInput
                    variant="standard"
                    style={{ padding: 8 }}
                    placeholder='Enter Password'
                    placeholderTextColor={'#d8b664'}
                    inputStyle={{ color: 'white' }}
                    secureTextEntry={true}
                />

                {/* <Input
                    placeholder='Enter Password'
                    style={{ padding: 8 }}
                /> */}

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        margin: 8, padding: 12,
                        alignItems: 'center', borderRadius: 4,
                        backgroundColor: '#d8b664',
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}
                    >CONFIRM</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ flexDirection: 'row', padding: 8 }}
                    onPress={() => { navigation.navigate('Register') }}
                >
                    <Text style={{ color: '#d8b664' }}>
                        New User ?
                    </Text>
                    <Text style={{ color: 'white', marginStart: 8 }}>
                        REGISTER
                    </Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default Login
