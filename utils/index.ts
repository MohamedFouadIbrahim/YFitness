import axios, { Method, AxiosResponse, AxiosError } from 'axios';
import toast from 'react-native-simple-toast';

export namespace Utils {


    export enum httpStatusCode {
        Ok = 200,
        BadRequest = 400,
        UnAuthorized = 401,
        NotFound = 404
    }

    export enum ToastTime {
        short = 5,
        long = 10
    }

    export class Network {

        private DEFAULT_ROOT_URL_DEV: string = 'http://192.168.1.13:9000/Api'

        private HTTP_REQUEST(method: Method, endpoint: string, post_data: object | null, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {

            axios({ method, url: `${this.DEFAULT_ROOT_URL_DEV}/${endpoint}`, data: post_data })
                .then(function (response: AxiosResponse) {

                    onSuccess && onSuccess(response)

                }).catch(function (error: AxiosError) {

                    switch (error.response?.status) {
                        case httpStatusCode.UnAuthorized:
                            // logout 
                            break;
                        case httpStatusCode.BadRequest:
                        case httpStatusCode.NotFound:
                            onFailure && onFailure(error)
                            break;
                        default:
                            return
                    }
                });
        }

        protected POST(endpoint: string, post_data: object, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {
            return this.HTTP_REQUEST("post", endpoint, post_data, onSuccess, onFailure);
        }

        protected GET(endpoint: string, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {
            return this.HTTP_REQUEST("get", endpoint, null, onSuccess, onFailure);
        }

        protected DELETE(endpoint: string, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError) => void) {
            return this.HTTP_REQUEST("delete", endpoint, null, onSuccess, onFailure);
        }

    }

    export class Toast {

        showToast(msg: string, time: ToastTime = ToastTime.short) {
            toast.show(msg, time)
        }
    }

    export class Vaildation {

        isValidEmail(email: string) {
            return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
        }

        isValidURL(url: string) {
            const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
                '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i');

            return pattern.test(url)
        }

        isValidPassword(password: string) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(password);
        }
    }

}