import axios from "axios"
import { appConfig } from "./appConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
    baseURL:appConfig.BASE_URL,
})

axios.interceptors.response.use(async response => {
    console.log(response, 'response');
    return response;
})

// const token = AsyncStorage.getItem(token);