import { API } from "../../../core/api"
export default class AuthApi{
    login = (data:any) => {
        return API.post('/', data)  }
}