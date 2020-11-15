import React, { useState } from 'react';
import { Image, ScrollView, View, Animated } from "react-native";
import { connect, DispatchProp } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomHeader, { LeftIcon } from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomSwitch from '../../components/CustomSwitch';
import { SystemColors } from '../../constants/Colors';
import { PagePadding } from '../../constants/Styles';
import { LoginActions } from '../../redux/LoginRedux';
import { UserRegist } from '../../services/UserServices';

interface RegistProps {

}

const Regist: React.FC<RegistProps> = () => {

    const [isGym, setIsGym] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [logoScaleValue] = useState(new Animated.Value(0))

    const startLogoAnimatios = () => {

        Animated.timing(logoScaleValue, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true
        }).start()
    }

    const scale = logoScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2]
    })

    return (
        <View style={{
            backgroundColor: SystemColors.darkBG,
            flex: 1
        }} >

            <CustomHeader headerTitle='Registartion' leftIcon={LeftIcon.Back} />

            <ScrollView contentContainerStyle={{ paddingHorizontal: PagePadding.largePadding }} >

                <Animated.Image source={require('../../assets/images/Logo.png')} style={{
                    width: 300,
                    height: 300,
                    alignSelf: 'center',
                    transform: [{ scale }]
                }} />

                <CustomInput animated placeholder='Name' value={name} onChangeText={(name) => { setName(name) }} />

                <CustomInput animated order={2} placeholder='Email' keyboardType='email-address' value={email} style={{ marginTop: PagePadding.largePadding }} onChangeText={(email) => { setEmail(email) }} />

                <CustomInput animated order={3} placeholder='Password' style={{ marginTop: PagePadding.largePadding }} value={password} secureTextEntry onChangeText={(pass) => { setPassword(pass) }} />

                <CustomInput animated order={4} placeholder='Confirm Password' style={{ marginTop: PagePadding.largePadding }} value={confirmPassword} secureTextEntry onChangeText={(pass) => { setConfirmPassword(pass) }} />

                <CustomSwitch
                    text='Iam A Gym ?'
                    containerProps={{ style: { marginTop: PagePadding.largePadding, paddingHorizontal: PagePadding.smallPadding } }}
                    switchProps={{
                        value: isGym,
                        onValueChange: (value) => {
                            setIsGym(value)
                        }
                    }} />

                <CustomButton
                    animated
                    text={'Regist'}
                    isLoading={isLoading}
                    style={{
                        marginTop: PagePadding.largePadding,
                        alignSelf: 'center'
                    }}
                    onPress={() => {

                        startLogoAnimatios()
                        setIsLoading(true)

                        // UserRegist(name, email, password, res => {
                        //     console.log(res.data)
                        //     setIsLoading(false)
                        // }, err => {
                        //     setIsLoading(false)
                        // })

                    }}
                />

            </ScrollView>

        </View>
    )
}

const mergeProps = (stateProps: object, { dispatch }: DispatchProp, ownProps: object) => {

    const { setIsLoggedIn, setIsGym, setMainToken } = LoginActions;

    return {
        ...ownProps,
        ...stateProps,
        setIsLoggedIn: (is_logged_in: boolean) => setIsLoggedIn(dispatch, is_logged_in),
        setIsGym: (isGym: boolean) => setIsGym(dispatch, isGym),
        setMainToken: (main_token: string) => setMainToken(dispatch, main_token),
    };

};

// const mapStateToProps = ({ login: { is_logged_in } }: ISystemState) => ({
//   is_logged_in,
// });

export default connect(undefined, undefined, mergeProps)(Regist);