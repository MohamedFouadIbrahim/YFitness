import { AxiosError, AxiosResponse } from 'axios';
import { GET, POST } from '../utils/Network';


export const UserLogin = (email: string, password: string, onSucess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) => {
    POST('Users/login', { Email: email, Password: password }, res => { onSucess && onSucess(res) }, err => { onFailure && onFailure(err) })
}

export const UserRegist = ( name: string, email: string, password: string, onSucess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) => {
    POST('Users/regist', { Name: name, Email: email, Password: password }, res => { onSucess && onSucess(res) }, err => { onFailure && onFailure(err) })
}
