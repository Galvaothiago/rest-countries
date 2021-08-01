import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_REST_COUNTRIES_URL
})