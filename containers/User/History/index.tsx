import React, { useState } from "react";
import { FlatList, View } from "react-native";
import FontedText from "../../../components/FontedText";
import RemoteDataContainer from "../../../components/RemoteDataContainer";
import { SystemColors } from "../../../constants/Colors";
import { PagePadding } from "../../../constants/Styles";
import HistoryRow, { RequestState } from "./HistoryItem";

interface UserHistoryProps {

}

const UserHistory: React.FC<UserHistoryProps> = (props) => {

    // const [userRequestHistory] = useState([])

    const userRequestHistory = [
        {
            gymName: 'World Gym',
            historyId: 10,
            requestState: RequestState.Accepted
        },
        {
            gymName: 'Golds Gym',
            historyId: 12,
            requestState: RequestState.Canceled
        },
        {
            gymName: 'Shark Gym',
            historyId: 11,
            requestState: RequestState.Holding
        },
    ]

    return (

        <FlatList
            style={{ backgroundColor: SystemColors.darkBG, flexGrow: 1, padding: PagePadding.mediumPadding, paddingBottom: (PagePadding.largePadding * 2) }}
            data={userRequestHistory}
            renderItem={({ item: { gymName, historyId, requestState } }) => <HistoryRow gymName={gymName} historyId={historyId} requestState={requestState} />}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={() => <FontedText style={{ fontSize: 25, color: 'white', marginBottom: PagePadding.mediumPadding }} >{'Your Requests'}</FontedText>}
        />

    )
}
export default UserHistory