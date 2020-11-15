import React, { useEffect, useState } from "react";
import { Animated, Easing, TextInput, TextInputProps } from 'react-native';
import { SystemColors } from "../../constants/Colors";
import { PagePadding, PageRadius, Screen } from "../../constants/Styles";

interface props extends TextInputProps {
    animated?: boolean,
    order?: number
}
const CustomInput: React.FC<props> = (props) => {

    const [textInputsState] = useState(new Animated.Value(-Screen.width))

    const textInputPossion = {
        transform: [
            {
                translateX: props.animated ? textInputsState : 0
            }
        ]
    }

    const moveTextInput = () => {

        const {
            order = 1
        } = props

        const timeout = setTimeout(() => {
            Animated.timing(textInputsState, {
                toValue: 0,
                duration: 650,
                useNativeDriver: true,
                easing: Easing.bounce
            }).start()

        }, (100 * order));

        return timeout
    }

    useEffect(() => {

        const {
            animated
        } = props

        if (animated) {
            const timeout = moveTextInput()
            return () => clearTimeout(timeout);
        }

    }, [])


    return (
        <Animated.View style={textInputPossion} >
            <TextInput
                {...props}
                style={[{
                    paddingHorizontal: PagePadding.largePadding,
                    height: 40,
                    borderRadius: PageRadius.largeRadius,
                    borderWidth: 1,
                    borderColor: SystemColors.logoColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlignVertical: 'center',
                    color: SystemColors.logoColor
                }, props.style]}
                placeholderTextColor={SystemColors.logoColor}
            />
        </Animated.View>
    )
}

export default CustomInput