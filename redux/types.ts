export interface ISystemState {
    login: ILoginState
}

//#region LoginAction 
export interface ILoginState {
    is_logged_in?: boolean,
	main_token?: string,
	isGym?: boolean
}
//#endregion