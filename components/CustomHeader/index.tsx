import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from 'react';
import { Platform, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SystemColors } from '../../constants/Colors';
import { PagePadding, Screen } from "../../constants/Styles";
import FontedText from '../FontedText';

interface HeaderProps {
    leftIcon?: LeftIcon,
    headerTitle: string,
    rightComponent?: React.Component | React.FC,
}

export enum LeftIcon {
    Back = 'Back',
    Drawer = 'Drawer'
}


export const headerHeight = Platform.OS === 'ios' ? 56 : 56 // 56 + 25
export const headerIconSize = 20
export const secondHeaderIconSize = 28
export const headerButtonPadding = 5
export const headerFontSize = 16
export const headerLargeFontSize = 34

//arrow-forward

const CustomHeader: React.FC<HeaderProps> = ({ leftIcon, headerTitle, rightComponent }) => {

    const leftComponent = () => {

        const navigation = useNavigation()

        switch (leftIcon) {

            case LeftIcon.Back:

                return (
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 8,
                        }}>
                        <Ionicons
                            // name={`ios-arrow-round-${I18nManager.isRTL ? 'forward' : 'back'}`}
                            name='arrow-back-outline'
                            size={secondHeaderIconSize}
                            color={SystemColors.lightDarkBG} />

                    </TouchableOpacity>
                )

            case LeftIcon.Drawer:

                return (
                    <TouchableOpacity onPress={() => {
                        DrawerActions.toggleDrawer()
                    }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 15,
                        }}>

                        <SimpleLineIcons name="menu" color={SystemColors.logoColor} size={headerIconSize} />

                    </TouchableOpacity>
                )

            default:
                return <View />
        }
    }

    const middleComponent = () => {

        return (
            <FontedText style={{ color: SystemColors.darkBG, position:'absolute', left: Screen.width/ 2.5 }} >
                {headerTitle}
            </FontedText>
        )

    }

    const localRightComponent = () => {

        if (rightComponent) {
            return rightComponent
        } else {
            return <View />
        }
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: headerHeight, backgroundColor: SystemColors.logoColor, paddingHorizontal: PagePadding.mediumPadding }}  >

            {leftComponent()}
            {middleComponent()}
        </View>
    )
}

export default CustomHeader