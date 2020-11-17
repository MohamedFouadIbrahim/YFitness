import { AxiosResponse, AxiosError } from 'axios';
import { Utils } from '../utils/index';

export namespace Services {

    export class User extends Utils.Network {

        UserLogin(email: string, password: string, onSucess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {
            this.POST('Users/login', { Email: email, Password: password }, res => { onSucess && onSucess(res) }, err => { onFailure && onFailure(err) })
        }

        UserRegist(name: string, email: string, password: string, onSucess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {
            this.POST('Users/regist', { Name: name, Email: email, Password: password }, res => { onSucess && onSucess(res) }, err => { onFailure && onFailure(err) })
        }

    }

}