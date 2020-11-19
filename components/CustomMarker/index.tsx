import React, { useEffect, useState } from "react";
import { Image, ImageProps, View, Animated, Easing, TouchableOpacity, Platform } from "react-native";
import { Marker, MarkerProps } from "react-native-maps";
import { SystemColors } from "../../constants/Colors";
import FontedText from "../FontedText";

interface CustomMarkerProps extends MarkerProps {
    imageProps?: ImageProps,
    imageUrl?: string,
    animationDelay?: number,
    gymName: string,
    onMarkerPress: () => void
}

const CustomMarker: React.FC<CustomMarkerProps> = (props) => {

    const [scale] = useState(new Animated.Value(0))

    const style = {
        transform: [
            {
                scale
            }
        ]
    }

    useEffect(() => {

        const {
            animationDelay = 1
        } = props

        Animated.timing(scale, {
            toValue: 1,
            useNativeDriver: false,
            duration: 600,
            easing: Easing.bounce,
            delay: (1000 * animationDelay)
        }).start()

    }, [])

    return (


        <Marker coordinate={props.coordinate} style={{ alignItems: 'center', }} onPress={() => { props.onMarkerPress() }} >

            <Animated.View style={[style, { alignItems: 'center', bottom: Platform.OS == 'ios' ? 40 : 0 }]}>

                <FontedText style={{ width: 80, alignSelf: 'center', textAlign: 'center', color: SystemColors.darkBG, marginBottom: 5 }} >
                    {props.gymName}
                </FontedText>

                <Image source={props.imageUrl ? { uri: props.imageUrl } : require('../../assets/images/a.jpg')} style={{
                    width: 70,
                    height: 70,
                    borderWidth: 5,
                    borderRadius: 25,
                    borderColor: SystemColors.logoColor,
                }} {...props.imageProps} />

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
            </Animated.View>

        </Marker>


    )
}

export default CustomMarker