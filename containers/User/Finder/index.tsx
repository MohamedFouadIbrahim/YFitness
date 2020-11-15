import React from "react";
import MapView from "react-native-maps";
import CustomMarker from "../../../components/CustomMarker";

interface FinderProp {

}

const Finer: React.FC<FinderProp> = (props) => {

  
    return (

            <MapView initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            }} style={{ flex: 1 }} >
                <CustomMarker coordinate={{ latitude: 1, longitude: 1, longitudeDelta: 0, latitudeDelta: 0 }} />
            </MapView>

    )
}

export default Finer
