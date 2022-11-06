const URL = 'http://localhost:3333'
import axios from 'axios'

export const api = axios.create({
    baseURL: URL
})