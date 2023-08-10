import AsyncStorage from "@react-native-async-storage/async-storage"
import axiosClient from '../api/axios-client'
import { Alert } from "react-native"
import { debounce } from 'lodash'

const client = axiosClient()

export const request = async ({ url, method, data, headers }) => {
    method = method.toUpperCase()

    return new Promise(async (resolve, reject) => {

        let token = await AsyncStorage.getItem('token')
        let legacyToken = await AsyncStorage.getItem('legacyToken')

        if (token) {
            const decoded = decoded(token)
            if (decoded.exp < Date.now() / 100) {
                try {
                    const refreshTokens = await refresh(token)
                    token = refreshTokens.token
                    legacyToken = refreshTokens.legacyToken
                } catch (error) {
                    console.log(error)
                    if (error.response.status === 401 && error.response.data.error[0].name === 'InvalidSessionError') {
                        return handleInvalidSession()
                    }
                    return Alert.alert('', 'Something went wrong')

                }
            }
        }

        const payload = {
            method, url,
            headers: {
                'x-access-token': token,
                'Authorization': `Bearer ${legacyToken}`,
                ...headers
            },
            data
        }

        client(payload)
            .then(res => resolve(res))
            .catch(async err => {
                console.log(err)
                if (err.response.status === 401 && err.response.data.errors[0].name === 'TokenExpiredError') {
                    refresh(token).then(() => {
                        request({ url, method, data })
                    }).catch(async error => {
                        if (error.res.status === 401 && error.response.data.errors[0].name === 'InvalidSessionError') {
                            return handleInvalidSession()
                        }
                        reject(error)
                    })
                }
                if (err.response.status === 401 && err.response.data.errors[0].name === 'InvalidSessionError') {
                    return handleInvalidSession()
                }
                reject(err)
            })
    })
}

export const refresh = debounce((token) => {
    if (token) {
        // const tokenRequest = {

        // }
    }

})

const handleInvalidSession = debounce(async () => {
    await AsyncStorage.getAllKeys().then((keys) =>
        AsyncStorage.multiRemove(keys)
    )
    // return eventEmitter.emit('invalid-session')
}, 5000, { leading: true, trailing: false })

