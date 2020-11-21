import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, TextProps } from 'react-native';
import { PagePadding, PageRadius } from '../../constants/Styles';
import FontedText from '../FontedText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SystemColors } from '../../constants/Colors';

interface ArrowItemProps {
    title: string,
    icon?: Function,
    TouchableOpacityProps?: TouchableOpacityProps,
    textProps?: TextProps
}

const ArrowItem: React.FC<ArrowItemProps> = (props) => {

    return (
        <TouchableOpacity
            {...props.TouchableOpacityProps}
            style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: SystemColors.lightDarkBG,
                paddingHorizontal: PagePadding.largePadding,
                paddingVertical: PagePadding.mediumPadding,
                marginHorizontal: PagePadding.largePadding,
                borderRadius: PageRadius.smallRadius,
                borderWidth: 1,
                borderColor: SystemColors.darkGray
            }, props.TouchableOpacityProps?.style]}
        >

            <FontedText {...props.textProps} style={[{ fontSize: 20 }, props.textProps?.style]} >
                {props.title}
            </FontedText>

            {props.icon ? props.icon() : <AntDesign name='right' size={20} color={SystemColors.logoColor} />}

        </TouchableOpacity>



    )
}

export default ArrowItem