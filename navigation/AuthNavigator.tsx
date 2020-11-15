import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Login from '../containers/Login';
import Regist from '../containers/Regist';


interface AuthProp {

}

export type AuthParamList = {
	Login: undefined,
	Regist: undefined
}

const Auth_Navigator = createStackNavigator<AuthParamList>();

const Auth: React.FC<AuthProp> = () => (
	<Auth_Navigator.Navigator headerMode='none'>
		<Auth_Navigator.Screen name='Login' component={Login} />
		<Auth_Navigator.Screen name='Regist' component={Regist} />
	</Auth_Navigator.Navigator>
)

export default Auth