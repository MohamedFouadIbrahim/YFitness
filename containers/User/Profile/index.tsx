import React from "react";
import { ScrollView, View } from "react-native";
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
    <ScrollView style={{flexGrow: 1, backgroundColor: SystemColors.darkBG}} >

        <UserCart Email="momomo@moj.com" Name='mohamed' Points={'50'} Id={'21'} image={{ source: require('../../../assets/images/f.jpg') }} />



    </ScrollView>

)
export default UserProfile