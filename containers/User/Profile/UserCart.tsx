import React from "react";
import { View } from "react-native";
import FontedText from "../../../components/FontedText";
import { SystemColors } from "../../../constants/Colors";

interface UserCartProps {
    Name: String,
    Email: String,
    Id: String,
    Points: String
}

const UserCart: React.FC<UserCartProps> = ({ Email, Name, Points, Id }) => {

    return (
        <View style={{ backgroundColor: SystemColors.lightDarkBG, padding: 10 }}>

            <FontedText style={{ alignSelf: 'center', fontSize: 20 }} >
                {Name}
            </FontedText>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginVertical:10 }} >

                <FontedText style={{ alignSelf: 'center', fontSize: 20 }}>
                    {Email}
                </FontedText>

                <FontedText style={{ alignSelf: 'center', fontSize: 20 }} >
                    {`Id : ${Id}`}
                </FontedText>

            </View>

            <FontedText style={{ alignSelf: 'center', fontSize: 20 }}>
                {`${Points} Y`}
            </FontedText>

        </View>
    )
}
export default UserCart