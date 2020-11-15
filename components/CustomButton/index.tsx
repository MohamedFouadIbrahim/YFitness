import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity, TouchableOpacityProps, TextProps, Animated } from 'react-native';
import { SystemColors } from "../../constants/Colors";
import { PagePadding, PageRadius, Screen } from "../../constants/Styles";
import FontedText from "../FontedText";

interface CustomButtonProps extends TouchableOpacityProps {
    TextProps?: TextProps,
    text: String,
    isLoading?: boolean,
    animated?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({ TextProps, text, style, isLoading = false, animated = false, ...restProps }) => {

    const [width] = useState(new Animated.Value(0))

    const widthInterpolate = width.interpolate({
        inputRange: [0, 1],
        outputRange: [Screen.width - 30, 80]
    })

    const animatedStyle = {
        width: widthInterpolate
    }

    const startAnimation = () => {

        Animated.timing(width, {
            toValue: 1,
            useNativeDriver: false
        }).start()

    }

    return (
        <Animated.View
            style={[{
                padding: PagePadding.smallPadding,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: SystemColors.logoColor,
                borderWidth: 1,
                borderRadius: PageRadius.largeRadius,
                shadowColor: SystemColors.logoColor,
                shadowOpacity: 1,
                backgroundColor: SystemColors.lightDarkBG
            }, animatedStyle, style]}
        >

            <TouchableOpacity disabled={isLoading} onPress={(e) => {

                const {
                    onPress
                } = restProps

                if (animated) {
                    startAnimation()
                    onPress && onPress(e)
                } else {
                    onPress && onPress(e)
                }

            }}  >

                {isLoading ? <ActivityIndicator color={SystemColors.logoColor} /> :
                    <FontedText  {...TextProps}>
                        {text}
                    </FontedText>}

            </TouchableOpacity>
        </Animated.View>

    )
}
export default CustomButton