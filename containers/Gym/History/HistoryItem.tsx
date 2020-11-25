import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontedText from '../../../components/FontedText';
import TranslatedText from '../../../components/TranslatedText';
import { SystemColors } from '../../../constants/Colors';
import { PagePadding, PageRadius } from '../../../constants/Styles';

interface RequestsRowProps {
    customerName: string,
    historyId: number,
    onRequestPress?: (customerName: string, historyId: number) => void,
    requestState: RequestState
}

export enum RequestState {
    Canceled = 'Canceled',
    Accepted = 'Accepted',
    Holding = 'Holding',
    Refusing = 'Refusing'
}

const HistoryRow: React.FC<RequestsRowProps> = (props) => {

    return (
        <View style={{ marginTop: PagePadding.smallPadding, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: SystemColors.lightDarkBG, padding: 10, borderRadius: 5 }} >

            <FontedText>
                {`${props.customerName}`}
            </FontedText>

            <TouchableOpacity
                disabled={props.requestState == RequestState.Holding ? false : true}
                onPress={() => { props.onRequestPress && props.onRequestPress(props.customerName, props.historyId) }}
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: SystemColors.darkGray, padding: PageRadius.smallRadius, borderRadius: 5 }}
            >

                <TranslatedText text={props.requestState} />
                {/* <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: props.available ? 'green' : 'red' }} /> */}

            </TouchableOpacity>
        </View>
    )
}

export default HistoryRow