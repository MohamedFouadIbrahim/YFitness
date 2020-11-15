import React from "react";
import { View } from "react-native";
import CustomHeader from "../../../components/CustomHeader";
import FontedText from "../../../components/FontedText";
import RemoteDataContainer from "../../../components/RemoteDataContainer";
import { SystemColors } from "../../../constants/Colors";
import UserCart from "./UserCart";

interface UserProfileProps {

}

interface OneRequest {
    item: {
        name?: string,
        age?: number
    }
    index?: number
}

const UserProfile: React.FC<UserProfileProps> = (props) => (
        <RemoteDataContainer
            renderItem={(items: OneRequest) => <FontedText>{items.item.name}</FontedText>}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={() => <UserCart Email="momomo@moj.com" Name='mohamed' Points={'50'} Id={'21'} />}
            contentContainerStyle={{ backgroundColor: SystemColors.darkBG, flexGrow: 1 }}
        />

)
export default UserProfile