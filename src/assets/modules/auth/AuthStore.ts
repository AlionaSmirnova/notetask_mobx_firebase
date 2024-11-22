import {makeAutoObservable, runInAction} from 'mobx';
import AuthService from './AuthService';
import { run } from 'jest';

export class AuthStore {
  loader: boolean = false;
  token: string| null = null;
  private authService: AuthService;
  
  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
  }
//24 38 видео остановилось

  login = async(username:string, password:string) => {
    this.setLoading(true);
    try {
        const res = await this.authService.login({username, password});
        runInAction(() => {
            this.token = res;
        })
    } catch (e) {
      console.log(e, 'e');
    } finally {
      this.setLoading(false);
    }
  };
  setLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
