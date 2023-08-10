import axios from 'axios'
import { ENVIRONMENT } from "../constants/environment"

export const BASE_URL = ENVIRONMENT === 'production' ? '' : ''

const axiosClient = () => {
    return axios.create({
        baseURL: BASE_URL
    })
}

export default axiosClient
