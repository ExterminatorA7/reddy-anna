import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Layout } from '@ui-kitten/components'
import { TextInput } from '@react-native-material/core'
import Logo from '../../../assets/logo.png'
import WhatsIcon from '../../../assets/whats-app.svg'

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Register = ({ navigation }) => {
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
                    style={{ backgroundColor: '#d8b664', alignItems: 'center', padding: 12, borderRadius: 4, margin: 8 }}
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
