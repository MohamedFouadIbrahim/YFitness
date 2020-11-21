import React from "react";
import { ScrollView } from "react-native";
import ArrowItem from "../../../components/ArrowItem";
import FontedText from "../../../components/FontedText";
import { SystemColors } from "../../../constants/Colors";
import UserCart from "./UserCart";
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginActions } from "../../../redux/LoginRedux";
import { DispatchProp, connect, MapDispatchToPropsParam } from 'react-redux';
import { AnyAction } from "redux";

interface UserProfileProps {
    setIsLoggedIn: (isLogin: boolean) => void
}

const UserProfile: React.FC<UserProfileProps> = (props) => {

    const { setIsLoggedIn } = props;


    return (


        <ScrollView style={{ flexGrow: 1, backgroundColor: SystemColors.darkBG }} >

            <UserCart Email="momomo@moj.com" Name='mohamed' Points={'50'} Id={'21'} image={{ source: require('../../../assets/images/f.jpg') }} />

            <ArrowItem title='Points' icon={() => (<FontedText style={{ fontSize: 18 }} >{'50 Y'}</FontedText>)} TouchableOpacityProps={{ disabled: true }} />

            <ArrowItem title='Id' icon={() => (<FontedText style={{ fontSize: 18 }} >{'100'}</FontedText>)} TouchableOpacityProps={{ disabled: true, style: { marginTop: 20 } }} />

            <ArrowItem title={'Log Out'} TouchableOpacityProps={{ style: { marginTop: 20 }, onPress: () => { setIsLoggedIn(false) } }} icon={() => <Entypo name='log-out' color={'red'} size={20} />} />
        </ScrollView>
    )
}

const mergeProps = (stateProps: object, { dispatch }: DispatchProp, ownProps: object) => {

    const { setIsLoggedIn } = LoginActions;

    return {
        ...ownProps,
        ...stateProps,
        setIsLoggedIn: (is_logged_in: boolean) => setIsLoggedIn(dispatch, is_logged_in),
    };
};


export default connect(undefined, undefined, mergeProps)(UserProfile)