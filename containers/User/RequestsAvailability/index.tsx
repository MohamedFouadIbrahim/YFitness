import React from 'react';
import { FlatList, View } from 'react-native';
import CustomHeader, { LeftIcon } from '../../../components/CustomHeader';
import FontedText from '../../../components/FontedText';
import LazyContainer from '../../../components/LazyContainer';
import { showToast } from '../../../utils/Toast';
import RequestRow from './RequestRow';

interface RequestsAvailabilityProps {

}

const RequestsAvailability: React.FC<RequestsAvailabilityProps> = (props) => {

    const allRequestsAPI = [
        {
            id: 0,
            sportName: 'Gym',
            available: true,
            price: 90
        },
        {
            id: 1,
            sportName: 'Gym With Cardio',
            available: false,
            price: 80
        }, {
            id: 2,
            sportName: 'Boxing',
            available: true,
            price: 30
        },
        {
            id: 4,
            sportName: 'Swimming',
            available: false,
            price: 40
        },
    ]

    return (
        <>
            <CustomHeader headerTitle={'Requets'} leftIcon={LeftIcon.Back} />

            <LazyContainer>
                <FlatList
                    data={allRequestsAPI}
                    renderItem={({ item, index }) => (
                        <RequestRow available={item.available} requestPrice={item.price} sportName={item.sportName} sportId={item.id} onRequestPress={(name, id, avalible) => {
                            if (avalible) {
                                showToast('Request Has Been Send')
                                return
                            }
                            showToast('Request Not availble now')
                        }} />
                    )}
                    keyExtractor={({ id }) => String(id)}
                    ItemSeparatorComponent={() => (<View style={{ height: 20 }} />)}
                    ListHeaderComponent={() => (<FontedText style={{ color: 'white', fontSize: 20, marginBottom: 20 }} >{"Wolrd Gym Requests"}</FontedText>)}
                />
            </LazyContainer>
        </>
    )
}

export default RequestsAvailability