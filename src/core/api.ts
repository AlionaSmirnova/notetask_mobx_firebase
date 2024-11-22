import axios from "axios"
import { appConfig } from "./appConfig";

export const API = axios.create({
    baseURL:appConfig.BASE_URL,
})

axios.interceptors.response.use(async response => {
    console.log(response, 'response');
    return response;
})
