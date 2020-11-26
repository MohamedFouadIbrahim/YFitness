import React from "react";
import { Image, View, ImageProps } from "react-native";
import FontedText from "../../../components/FontedText";
import { SystemColors } from "../../../constants/Colors";
import { PagePadding, PageRadius } from "../../../constants/Styles";

interface UserCartProps {
    Name: String,
    Email: String,
    Id: String,
    Points: String,
    image: ImageProps
}

const UserCart: React.FC<UserCartProps> = ({ Email, Name, Points, Id, image }) => {

    return (
        <View style={{ backgroundColor: SystemColors.lightDarkBG, padding: 10, margin: PagePadding.largePadding, borderRadius: PageRadius.mediumRadius }}>


            <Image style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', borderColor: SystemColors.logoColor, borderWidth: 2 }} source={image.source} />

            <FontedText style={{ alignSelf: 'center', fontSize: 20, marginTop: 10 }} >
                {Name}
            </FontedText>

            <FontedText style={{ alignSelf: 'center', fontSize: 20, marginTop: 10 }}>
                {Email}
            </FontedText>

        </View>
    )
}

/**
 *  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }} >



                <FontedText style={{ alignSelf: 'center', fontSize: 20 }} >
                    {`Id : ${Id}`}
                </FontedText>

            </View>

            <FontedText style={{ alignSelf: 'center', fontSize: 20 }}>
                {`${Points} Y`}
            </FontedText>
 * 
 */
export default UserCart