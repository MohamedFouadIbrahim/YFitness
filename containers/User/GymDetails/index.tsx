import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Lineargradient from 'react-native-linear-gradient';
import FontedText from '../../../components/FontedText';
import TranslatedText from '../../../components/TranslatedText';
import { SystemColors } from '../../../constants/Colors';
import { PagePadding, PageRadius, Screen } from '../../../constants/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import { FinderParamList } from '../../../navigation/MainTabNavigator';

interface GymDetailsProps {
    navigation?: StackNavigationProp<FinderParamList, 'GymDetails'>
}

const GymDetails: React.FC<GymDetailsProps> = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: SystemColors.darkBG,
            paddingBottom: (PagePadding.largePadding + 20),
        }} >

            <AntDesign name='closecircle'
                size={30}
                style={{ position: 'absolute', zIndex: 1, right: PageRadius.largeRadius, top: 10 }} color={SystemColors.logoColor}
                onPress={() => {
                    props.navigation?.goBack()
                }}
            />

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: Screen.height / 8
                }}
                style={{ backgroundColor: SystemColors.darkBG }}
            >

                <ImageBackground source={require('../../../assets/images/a.jpg')} style={{ width: Screen.width, height: Screen.height / 2 }} >
                    <Lineargradient colors={[SystemColors.lightDarkBG, '#000000', SystemColors.lightDarkBG]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ width: Screen.width, height: (Screen.height / 2), opacity: .4 }} />
                </ImageBackground>


                <FontedText style={{ color: 'white', fontSize: 35, paddingHorizontal: PagePadding.largePadding, bottom: 20 }} >
                    {'Gym Name With BigFont'}
                </FontedText>

                <FontedText style={{ paddingHorizontal: PagePadding.largePadding, fontSize: 20, bottom: 10 }} >
                    {'gym infooo'}
                </FontedText>
            </ScrollView>

            <TouchableOpacity
                style={{
                    backgroundColor: SystemColors.lightDarkBG,
                    paddingVertical: 10,
                    marginHorizontal: PagePadding.largePadding * 2,
                    alignItems: 'center',
                    borderRadius: 5,
                    shadowColor: SystemColors.logoColor,
                    shadowOpacity: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: PagePadding.largePadding * 2
                }}
                onPress={() => {
                    props.navigation?.navigate('RequestsAvailability')
                }}
            >
                <TranslatedText text={'Request'} style={{ fontSize: 17 }} />

                <AntDesign name='right' size={20} color={SystemColors.logoColor} />

            </TouchableOpacity>
        </View>

    )
}

export default GymDetails