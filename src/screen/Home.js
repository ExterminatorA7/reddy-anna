import { View, Image, Dimensions, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import React from 'react'
import ImageHome from '../../assets/home.jpg'
import { Button } from '@react-native-material/core'
import WhatsIcon from '../../assets/whats-app.svg'

const win = Dimensions.get('window')
const ratio = win.width / 541; //541 is actual image width

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={ImageHome}
                style={{
                    width: '100%',
                    height: '100%', //362 is actual height of image
                }}
            />

            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    position: 'absolute',
                    right: 0, left: 0, bottom: '5%',
                    borderRadius: 50, marginHorizontal: '10%', padding: 4,
                    backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
                }}
                onPress={() => {
                    // navigation.navigate('WebView')
                    // let url = 'https://api.whatsapp.com/send?phone=7733040777'
                    let url = 'https://api.whatsapp.com/send?text=' + 'I need id' + '&phone=91' + '7733040777';

                    Linking.openURL(url)
                        .then((data) => {
                            console.log('WhatsApp Opened');
                        })
                        .catch(() => {
                            Alert.alert('Make sure Whatsapp installed on your device');
                        });
                }}
            >
                <View style={{ flexDirection: 'row', margin: 8, alignItems: 'center' }}>
                    <WhatsIcon height={25} width={25} />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#60d66a', marginLeft: 12, }}>
                        CLICK HERE TO WHATSAPP & GET ID
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home
