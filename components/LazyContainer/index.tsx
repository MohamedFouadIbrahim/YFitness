import React from 'react'
import { View, ViewProps } from 'react-native'
import { SystemColors } from '../../constants/Colors'
import { PagePadding, Screen } from '../../constants/Styles'

const LazyContainer: React.FC<ViewProps> = (props) => {
    return (
        <View
            {...props}
            style={[{
                backgroundColor: SystemColors.darkBG,
                height: Screen.height,
                padding: PagePadding.mediumPadding
            }, props.style]}
        >
            {props.children}
        </View>
    )
}

export default LazyContainer