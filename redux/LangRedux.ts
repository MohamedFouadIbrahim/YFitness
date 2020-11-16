
import { Dispatch } from 'redux';
import { ILanguageState } from './types';

export interface ILanguageActionTypes {
    STORE_LANGUAGE_DATA: string
}

export const languageActionTypes: ILanguageActionTypes = {
    STORE_LANGUAGE_DATA: 'STORE_LANGUAGE_DATA'
};

export interface IStoreLanguageData extends ILanguageState {
    type: typeof languageActionTypes.STORE_LANGUAGE_DATA
}

export type LanguageActionTypes = IStoreLanguageData

export const LanguageActions = {
    storeLanguageData: (dispatch: Dispatch, languageData: ILanguageState) => { // to store inital Languge
        dispatch({
            type: languageActionTypes.STORE_LANGUAGE_DATA,
            currLangCode: languageData.currLangCode,
            currLangTr: languageData.currLangTr,
            isRTL: languageData.isRTL,
            haveStoredLanguage: true
        });
    },
};


const initalState: ILanguageState = {
    currLangCode: '',
    currLangTr: {},
    isRTL: false,
    haveStoredLanguage: false
}

export const reducer = (state: ILanguageState = initalState, action: LanguageActionTypes) => {

    const {
        type,
        currLangCode,
        currLangTr,
        isRTL,
        haveStoredLanguage
    } = action;

    switch (type) {
        case languageActionTypes.STORE_LANGUAGE_DATA:
            return {
                ...state,
                currLangCode,
                currLangTr,
                isRTL,
                haveStoredLanguage
            }
        default:
            return state
    }
}