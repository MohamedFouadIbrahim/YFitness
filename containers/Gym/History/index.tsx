import React from "react";
import { FlatList } from "react-native";
import FontedText from "../../../components/FontedText";
import { SystemColors } from "../../../constants/Colors";
import { PagePadding } from "../../../constants/Styles";
import HistoryRow, { RequestState } from "./HistoryItem";

interface GymHistoryProps {

}

const GymHistory: React.FC<GymHistoryProps> = (props) => {

    // const [GymRequestHistory] = useState([])

    const GymRequestHistory = [
        {
            customerName: 'Mohamed El Sayed',
            historyId: 10,
            requestState: RequestState.Accepted
        },
        {
            customerName: 'ahmed Abdallah',
            historyId: 12,
            requestState: RequestState.Canceled
        },
        {
            customerName: 'yaser Ali',
            historyId: 11,
            requestState: RequestState.Holding
        },
    ]

    return (

        <FlatList
            style={{ backgroundColor: SystemColors.darkBG, flexGrow: 1, padding: PagePadding.mediumPadding, paddingBottom: (PagePadding.largePadding * 2) }}
            data={GymRequestHistory}
            renderItem={({ item: { customerName, historyId, requestState } }) => <HistoryRow customerName={customerName} historyId={historyId} requestState={requestState} />}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={() => <FontedText style={{ fontSize: 25, color: 'white', marginBottom: PagePadding.mediumPadding }} >{'Your Requests'}</FontedText>}
        />

    )
}
export default GymHistory