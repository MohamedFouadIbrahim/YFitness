import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "../../../components/CustomMarker";
import { FinderParamList } from "../../../navigation/MainTabNavigator";
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { PagePadding, PageRadius } from "../../../constants/Styles";
import { SystemColors } from "../../../constants/Colors";
import { getCurrentLocation } from "../../../utils/Location";

interface FinderProp extends BottomTabNavigationOptions {
    navigation: StackNavigationProp<FinderParamList, 'Finder'>,
}

const Finer: React.FC<FinderProp> = (props) => {

    const [currentRegion, setCurrentRegion] = useState({
        latitude: 31.2001,
        longitude: 29.9187
    })

    useEffect(() => {
        props.tabBarVisible = false
    }, [])

    const GymsApi = [
        {
            gymName: 'Golds Gym',
            gymImage: require('../../../assets/images/a.jpg'),
            coordinate: { latitude: 31.2003, longitude: 29.9190 }
        },
        {
            gymName: 'World Gym',
            gymImage: require('../../../assets/images/d.jpeg'),
            coordinate: { latitude: 31.2020, longitude: 30.9200 }
        },
        {
            gymName: 'Shark Gym',
            gymImage: require('../../../assets/images/f.jpg'),
            coordinate: { latitude: 30.1000, longitude: 28.9200 }
        }
    ]

    return (

        <MapView
            region={{
                ...currentRegion,
                latitudeDelta: 5,
                longitudeDelta: 5
            }}
            style={{ flex: 1 }}
        >

            {GymsApi.map((item, index) => (
                <CustomMarker
                    gymName={item.gymName}
                    coordinate={item.coordinate}
                    imageProps={{ source: item.gymImage }}
                    animationDelay={index + 1}
                    key={index}
                    onMarkerPress={() => { props.navigation.navigate('GymDetails'); }}
                />
            ))}

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: PagePadding.mediumPadding,
                    top: PagePadding.mediumPadding,
                    backgroundColor: 'white',
                    padding: PagePadding.smallPadding,
                    borderRadius: (PageRadius.largeRadius * 10)
                }}
                onPress={() => {
                    getCurrentLocation((region) => {
                        setCurrentRegion({ ...region.coords });
                    })
                }}
            >
                <SimpleLineIcons name='location-pin' size={22} color={SystemColors.logoColor} />
            </TouchableOpacity>

        </MapView>

    )
}

export default Finer
