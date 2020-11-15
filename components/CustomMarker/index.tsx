import React from "react";
import { Image, ImageProps, View } from "react-native";
import { Marker, MarkerProps, Region } from "react-native-maps";
import { SystemColors } from "../../constants/Colors";

interface CustomMarkerProps {
    markerProps?: MarkerProps,
    imageProps?: ImageProps,
    coordinate: Region,
    imageUrl?: string
}

const CustomMarker: React.FC<CustomMarkerProps> = (props) => {

    return (
        <Marker coordinate={props.coordinate} style={{ alignItems: 'center' }}>

            <Image source={props.imageUrl ? { uri: props.imageUrl } : require('../../assets/images/Logo.png')} style={{
                width: 70,
                height: 70,
                borderWidth: 5,
                borderRadius: 25,
                borderColor: SystemColors.logoColor,
            }} />

            <View
                style={{
                    width: 0,
                    height: 0,
                    borderLeftColor: 'transparent',
                    borderLeftWidth: 15,
                    borderRightColor: 'transparent',
                    borderRightWidth: 15,
                    borderTopColor: SystemColors.logoColor,
                    borderTopWidth: 30,
                    bottom: 3
                }}
            />

        </Marker>
    )
}

export default CustomMarker