import React from "react";
import FontedText from "../../../components/FontedText";
import RemoteDataContainer from "../../../components/RemoteDataContainer";
import { SystemColors } from "../../../constants/Colors";

interface UserHistoryProps {

}

interface OneHistory {
    item: {
        name?: string,
        age?: number
    }
    index?: number
}

const UserHistory: React.FC<UserHistoryProps> = (props) => (

    <RemoteDataContainer
        renderItem={(items: OneHistory) => <FontedText>{items.item.name}</FontedText>}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{ backgroundColor: SystemColors.darkBG, flexGrow: 1 }}

    />

)
export default UserHistory