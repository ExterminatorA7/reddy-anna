import axios from 'axios'
import { ENVIRONMENT } from "../constants/environment"

export const BASE_URL = ENVIRONMENT === 'production' ? '' : 'http://13.53.40.209:5000/api'

const axiosClient = () => {
    return axios.create({
        baseURL: BASE_URL
    })
}

export default axiosClient
