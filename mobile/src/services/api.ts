import axios from "axios";
const baseURL = 'http://192.168.0.9:3333'

//obs: expo avaliable ip of you machine when you run expo go

export const api = axios.create({
    baseURL
})