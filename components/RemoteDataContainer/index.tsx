import React from "react";
import { FlatList, FlatListProps } from "react-native";
import { Modify } from "../../utils/TypeScriptHelper";

type props = Modify<FlatListProps<Object>, {
    data?: ReadonlyArray<Object> | null | undefined,
    Url?: string,
    prarms?: object
}>

type state = {
    data: Object[]
}

class RemoteDataContainer extends React.Component<props, state> {

    state = {
        data: []
    }

    getDataFromUrl = () => { 
        
    }

    render() {
        return (
            <FlatList data={this.state.data} {...this.props} />
        )
    }

}

export default RemoteDataContainer