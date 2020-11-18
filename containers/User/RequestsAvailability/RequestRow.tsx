import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontedText from '../../../components/FontedText';
import TranslatedText from '../../../components/TranslatedText';
import { SystemColors } from '../../../constants/Colors';
import { PageRadius } from '../../../constants/Styles';

interface RequestsRowProps {
    sportName: string,
    requestPrice: number,
    available: boolean,
    sportId: number,
    onRequestPress: (sportName: string, sportId: number, available: boolean) => void,
}

const RequestsRow: React.FC<RequestsRowProps> = (props) => {

    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: SystemColors.lightDarkBG, padding: 10, borderRadius: 5 }} >

            <FontedText>
                {`${props.sportName}  ${props.requestPrice}$`}
            </FontedText>

            <TouchableOpacity
                onPress={() => { props.onRequestPress(props.sportName, props.sportId, props.available) }}
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: SystemColors.darkGray, padding: PageRadius.smallRadius, borderRadius: 5 }}
            >

                <TranslatedText text='Request' />
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: props.available ? 'green' : 'red' }} />

            </TouchableOpacity>
        </View>
    )
}

export default RequestsRow