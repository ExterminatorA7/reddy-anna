import { View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebViewScreen = () => {

    let url = 'https://api.whatsapp.com/send?text=' + 'I need id' + '&phone=91' + '7733040777';

    console.log(url);

    return (
        <View style={{ flex: 1 }}>
            <WebView
                contentMode='mobile'
                source={{
                    uri: url,
                }}
            />
        </View>
    )
}

export default WebViewScreen
