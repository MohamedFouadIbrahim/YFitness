import React from "react";
import { Text, TextProps } from 'react-native';
import { SystemColors } from "../../constants/Colors";

// Add Your Font Here
const FontedText: React.FC<TextProps> = (props) => (
    <Text {...props} style={[{ color: SystemColors.logoColor }, props.style]} >
        {props.children}
    </Text>
)

export default FontedText