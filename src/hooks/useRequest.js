import { Alert } from "react-native"
import { request } from "../helpers/Network"

export default () => {

    const makeRequest = async ({ url, method, body, headers, onSuccess, onFailure }) => {
        try {
            const response = await request({
                url, method,
                data: body,
                headers
            })

            if (onSuccess) {
                onSuccess(response.data, response.headers)
            }

            return response.data

        } catch (error) {
            console.log(error.response.data)
            if (onFailure) {
                onFailure(error)
            }

            if (error.response.status >= 500) {
                console.log(url)
                Alert.alert('Something went wrong')
            }

        }

    }

    return { makeRequest }
}
