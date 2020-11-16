import { SingleLanguageTranslation } from "react-localize-redux";

export interface ISystemState {
    login: ILoginState,
    language: ILanguageState
}

//#region LoginAction 
export interface ILoginState {
    is_logged_in?: boolean,
	main_token?: string,
	isGym?: boolean
}
//#endregion

//#region LanguageAction 
export interface ILanguageState {
    currLangCode: string,
    isRTL: boolean,
    currLangTr: SingleLanguageTranslation,
    haveStoredLanguage: boolean
}
//#endregion