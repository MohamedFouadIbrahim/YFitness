import React from "react";
import { Switch, SwitchProps, TextProps, View, ViewProps } from 'react-native';
import { SystemColors } from "../../constants/Colors";
import FontedText from "../FontedText";

interface CustomSwitchProps {
    containerProps?: ViewProps,
    switchProps?: SwitchProps,
    textProps?: TextProps,
    text: String
}

const CustomSwitch: React.FC<CustomSwitchProps> = (props) => (

    <View {...props.containerProps} style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, props.containerProps?.style]} >
        <FontedText {...props.textProps} >
            {props.text}
        </FontedText>

        <Switch  {...props.switchProps} thumbColor={SystemColors.logoColor} trackColor={{ true: SystemColors.logoColor, false: SystemColors.logoColor }} ios_backgroundColor={SystemColors.lightDarkBG} />
    </View>
)

export default CustomSwitch