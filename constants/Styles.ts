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

interface IShadowOffset {
    width: number,
    height: number,
}

interface IShadowProp {
    shadowColor: string,
    shadowOffset: IShadowOffset,
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number
}

export enum Shadow {
    small,
    medium,
    large,
    xLarge
}

const shadowStyle0 = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
};

const shadowStyle1 = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
};

const shadowStyle2 = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
};

const shadowStyle3 = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
};



export const shadowHandler = (shadowSize: Shadow): IShadowProp => {
    switch (shadowSize) {
        case Shadow.small:
            return shadowStyle0
        case Shadow.medium:
            return shadowStyle1
        case Shadow.large:
            return shadowStyle2
        case Shadow.xLarge:
            return shadowStyle3
        default:
            return shadowStyle2
    }
}
