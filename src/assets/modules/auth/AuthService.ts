import { Title } from "react-native-paper";
import AuthApi from "./AuthApi";
export default class AuthService {
authApi: AuthApi;
constructor(){
this.authApi =  new AuthApi();
}

login =async (dataLogin:any) =>{ 
const {data} = await this.authApi.login(dataLogin);
return data;
}
}