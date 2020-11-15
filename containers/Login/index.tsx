import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import FontedText from '../../components/FontedText';
import LazyContainer from '../../components/LazyContainer';
import { SystemColors } from '../../constants/Colors';
import { PagePadding, Screen } from '../../constants/Styles';
import { AuthParamList } from '../../navigation/AuthNavigator';
import { LoginActions } from '../../redux/LoginRedux';

interface LoginProps {
  navigation?: StackNavigationProp<AuthParamList, 'Login'>;
  setIsLoggedIn: (is_logged_in: boolean) => void;
  setMainToken: (token: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {

  const [Email, setEmail] = useState('');

  const [Password, setPassword] = useState('');

  const [isLoading, setIsloading] = useState(false);

  const [imageOpactiyState] = useState(new Animated.Value(0));

  const imageOpactiy = {
    opacity: imageOpactiyState
  }

  const onChangeEmail = (email: string) => {
    setEmail(email);
  };

  const onChangePassword = (Password: string) => {
    setPassword(Password);
  };

  const showImageWithAnimation = () => {

    setTimeout(() => {

      Animated.timing(imageOpactiyState, {
        toValue: 1,
        duration: 650,
        useNativeDriver: true
      }).start()

    }, 100);

  }

  useEffect(() => {
    showImageWithAnimation()
  }, [])


  const submitLogin = () => {



    setIsloading(true)

    // props.setIsLoggedIn(true)

    // if (!Email || !isValidEmail(Email)) {
    //   return showToast('Please Enter Correct Email ..')
    // }

    // if (!Password || !isValidPassword) {
    //   return showToast('Please Enter correct Password ..')
    // }

    // UserLogin(Email, Password, res => {
    //   setIsloading(false)
    //   props.setIsLoggedIn(true)
    //   props.setMainToken(res.data?.token)
    // }, err => {

    //   setIsloading(false)
    //   showToast(err.response?.data.Erorr)

    // })

  }

  return (
    <LazyContainer>

      <ScrollView>

        <Animated.Image
          source={require('../../assets/images/Logo.png')}
          style={{
            width: 300,
            height: 400,
            alignSelf: 'center',
          }}
        />

        <CustomInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={onChangeEmail}
          value={Email}
          animated
        />

        <CustomInput
          placeholder="Password"
          style={{ marginTop: PagePadding.largePadding }}
          secureTextEntry
          onChangeText={onChangePassword}
          value={Password}
          animated
          order={2}
        />

        <Animated.View style={imageOpactiy} >
          <CustomButton
            animated
            text={'Login'}
            isLoading={isLoading}
            style={{
              marginTop: PagePadding.largePadding,
              alignSelf: 'center'
            }}
            onPress={() => { submitLogin() }}
          />
        </Animated.View>

        <Animated.View style={imageOpactiy} >

          <FontedText style={{ alignSelf: 'center', marginTop: PagePadding.largePadding * 2 }}>
            {"You don't have an account ?   "}

            <FontedText
              style={{ textDecorationLine: 'underline' }}
              onPress={() => { props.navigation?.navigate('Regist'); }}>
              {'Regist Now'}
            </FontedText>

          </FontedText>
        </Animated.View>

      </ScrollView>
    </LazyContainer>

  );
};

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

export default connect(undefined, undefined, mergeProps)(Login);
