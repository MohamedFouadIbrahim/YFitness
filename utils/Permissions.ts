import RNPermissions, { RESULTS, openSettings } from 'react-native-permissions';
import { Platform } from 'react-native';


const locationPermissionName = Platform.OS == 'android' ? RNPermissions.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : RNPermissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE

export const askForLocationPermission = (onSucess: () => void, onFailuer?: (reson: string) => void) => {


  RNPermissions.check(locationPermissionName).then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE: // location Is Closed
        onFailuer && onFailuer('Open Your Location Serves Please..')
        break;
      case RESULTS.DENIED: // Permission Is Refused From User
        RequestForPermission(onSucess, onFailuer)
        break;
      case RESULTS.GRANTED:
        onSucess && onSucess()
        break;
      case RESULTS.BLOCKED: // no And Dont Ask Me Again
        RequestForPermission(onSucess, onFailuer)
        break;
    }
  })
    .catch((error) => {
      onFailuer && onFailuer(String(error))
    });
}


const RequestForPermission = (onSucess: () => void, onFailuer?: (reson: string) => void) => {

  RNPermissions.request(locationPermissionName).then(result => {

    switch (result) {
      case RESULTS.UNAVAILABLE:
        onFailuer && onFailuer('Open Your Location Serves Please..')
        break;
      case RESULTS.DENIED:
        onFailuer && onFailuer('The permission has not been requested is denied but requestable Or Open Location Serveses')
        break;
      case RESULTS.GRANTED:
        onSucess && onSucess()
        break;
      case RESULTS.BLOCKED:
        onFailuer && onFailuer('Open Your Settings And Make Permission To Us')
        break;
    }
  })

}