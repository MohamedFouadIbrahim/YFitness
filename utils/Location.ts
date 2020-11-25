import Geolocation, { GeolocationResponse, GeolocationError } from '@react-native-community/geolocation';
import { askForLocationPermission } from './Permissions';
import { showToast } from './Toast';

export const getCurrentLocation = (onSucess: (response: GeolocationResponse) => void, onFailuer?: (err: GeolocationError) => void) => {

    askForLocationPermission(() => {

        Geolocation.getCurrentPosition((pos) => {
            onSucess && onSucess(pos)
        }, err => {
            onFailuer && onFailuer(err)
        })

    }, err => {
        showToast(err)
    })

}