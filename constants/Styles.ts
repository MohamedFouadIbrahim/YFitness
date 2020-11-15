import { Dimensions } from 'react-native'


export enum Screen {
    width = Dimensions.get('screen').width,
    height = Dimensions.get('screen').height
}

export enum PagePadding {
    largePadding = 20,
    mediumPadding = 15,
    smallPadding = 10
}


export enum PageRadius {
    largeRadius = 20,
    mediumRadius = 15,
    smallRadius = 10
}