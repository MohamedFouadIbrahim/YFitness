
import { Dispatch } from 'redux';
import { ILoginState } from './types';

export interface ILoginActionTypes {
	IS_LOGGED_IN: string,
	SET_MAIN_TOKEN: string,
	SET_IS_GYM: string,
}

export const loginActionTypes: ILoginActionTypes = {
	IS_LOGGED_IN: 'IS_LOGGED_IN',
	SET_MAIN_TOKEN: 'SET_MAIN_TOKEN',
	SET_IS_GYM: 'SET_IS_GYM',
};

export interface ISetIsLoggedIn extends ILoginState {
	type: typeof loginActionTypes.IS_LOGGED_IN;
}

export interface ISetMainToken extends ILoginState {
	type: typeof loginActionTypes.SET_MAIN_TOKEN;
}

export interface ISetIsGym extends ILoginState {
	type: typeof loginActionTypes.SET_IS_GYM;
}

export type LoginActionTypes = ISetIsLoggedIn | ISetMainToken | ISetIsGym

export const LoginActions = { // Ttry to return here

	setIsLoggedIn: (dispatch: Dispatch, is_logged_in: boolean) => {
		dispatch({ type: loginActionTypes.IS_LOGGED_IN, is_logged_in });
	},
	setMainToken: (dispatch: Dispatch, main_token: string) => {
		dispatch({ type: loginActionTypes.SET_MAIN_TOKEN, main_token })
	},
	setIsGym: (dispatch: Dispatch, isGym: boolean) => {
		dispatch({ type: loginActionTypes.SET_IS_GYM, isGym })
	}

};


const initalState: ILoginState = {
	isGym: false,
	is_logged_in: false,
	main_token: ''
}

export const reducer = (state: ILoginState = initalState, action: LoginActionTypes) => {

	const {
		type,
		isGym,
		is_logged_in,
		main_token
	} = action;

	switch (type) {
		case loginActionTypes.SET_MAIN_TOKEN:
			return { ...state, main_token }
		case loginActionTypes.SET_IS_GYM:
			return { ...state, isGym }
		case loginActionTypes.IS_LOGGED_IN:
			return { ...state, is_logged_in }
		default:
			return state
	}
}