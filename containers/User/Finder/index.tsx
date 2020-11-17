import React from "react";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "../../../components/CustomMarker";

interface FinderProp {

}

const Finer: React.FC<FinderProp> = (props) => {

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
            initialRegion={{
                latitude: 31.2001,
                longitude: 29.9187,
                latitudeDelta: 5,
                longitudeDelta: 5
            }}
            style={{ flex: 1 }}
        >

            {GymsApi.map((item, index) => (
                <CustomMarker gymName={item.gymName} coordinate={item.coordinate} imageProps={{ source: item.gymImage }} animationDelay={index +1} key={index} />
            ))}
        </MapView>

    )
}

export default Finer
