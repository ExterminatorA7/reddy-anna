import axios from 'axios'
import { ENVIRONMENT } from "../constants/environment"

export const BASE_URL = ENVIRONMENT === 'production' ? '' : 'http://192.168.1.6:5000/api'

const axiosClient = () => {
    return axios.create({
        baseURL: BASE_URL
    })
}

export default axiosClient
