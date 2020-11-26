import React from "react";
import { ScrollView } from "react-native";
import ArrowItem from "../../../components/ArrowItem";
import FontedText from "../../../components/FontedText";
import { SystemColors } from "../../../constants/Colors";
import GymProfileCart from "./GymProfileCart";
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginActions } from "../../../redux/LoginRedux";
import { DispatchProp, connect, MapDispatchToPropsParam } from 'react-redux';
import { AnyAction } from "redux";

interface GymProfileProps {
    setIsLoggedIn: (isLogin: boolean) => void,
    setIsGym: (isGym: boolean) => void
}

const GymProfile: React.FC<GymProfileProps> = (props) => {

    const { setIsLoggedIn } = props;


    return (


        <ScrollView style={{ flexGrow: 1, backgroundColor: SystemColors.darkBG }} >

            <GymProfileCart Email="YFitness@YFitness.com" Name='YFitness Gym' Points={'50'} Id={'21'} image={{ source: require('../../../assets/images/f.jpg') }} />

            <ArrowItem title='Points' icon={() => (<FontedText style={{ fontSize: 18 }} >{'50 Y'}</FontedText>)} TouchableOpacityProps={{ disabled: true }} />

            <ArrowItem title='Id' icon={() => (<FontedText style={{ fontSize: 18 }} >{'100'}</FontedText>)} TouchableOpacityProps={{ disabled: true, style: { marginTop: 20 } }} />

            <ArrowItem title={'Log Out'} TouchableOpacityProps={{ style: { marginTop: 20 }, onPress: () => { setIsLoggedIn(false); props.setIsGym(false) } }} icon={() => <Entypo name='log-out' color={'red'} size={20} />} />
        </ScrollView>
    )
}

const mergeProps = (stateProps: object, { dispatch }: DispatchProp, ownProps: object) => {

    const { setIsLoggedIn, setIsGym } = LoginActions;

    return {
        ...ownProps,
        ...stateProps,
        setIsLoggedIn: (is_logged_in: boolean) => setIsLoggedIn(dispatch, is_logged_in),
        setIsGym: (isGym: boolean) => setIsGym(dispatch, isGym),
    };
};


export default connect(undefined, undefined, mergeProps)(GymProfile)