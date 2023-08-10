import { View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{
                    uri: 'https://api.whatsapp.com/send?phone=9057921046',
                }}
                style={{ marginTop: 20 }}
            />
        </View>
    )
}

export default Home
