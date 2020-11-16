
import React from 'react';
import { addTranslationForLanguage, LocalizeContextProps, SingleLanguageTranslation, withLocalize } from 'react-localize-redux';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { connect, DispatchProp } from 'react-redux';
import { DEFAULT_LANGUAGE_CODE, DEFAULT_LANGUAGE_TRANSLATION, Languages } from './constants/Languages';
import { LanguageActions } from './redux/LangRedux';
import { ILanguageState, ISystemState } from './redux/types';

interface LanguageInitializerProps extends LocalizeContextProps {
    language?: ILanguageState,
    storeLanguageData: (data: ILanguageState) => void,
}

class LanguageInitializer extends React.Component<LanguageInitializerProps> {

    componentDidMount() {
        setTimeout(() => {
            this.initTarnslation()
        }, 1000);
    }

    initLanguage(code: string, translation: SingleLanguageTranslation) {

        const {
            initialize,
            storeLanguageData
        } = this.props

        initialize({
            languages: Languages,
            options: {
                renderToStaticMarkup: false,
                defaultLanguage: code
            }
        })

        addTranslationForLanguage(translation, code)

        const currLanguage = Languages.find(item => item.code == code)

        storeLanguageData({
            currLangCode: code,
            currLangTr: translation,
            haveStoredLanguage: true,
            isRTL: currLanguage?.isRTL || false
        })

        if (currLanguage?.isRTL && !I18nManager.isRTL) {
            I18nManager.forceRTL(true)
            RNRestart.Restart()
        }
    }

    loadDefaultLanguage() {
        console.log('loadDefaultLanguage')
        this.initLanguage(DEFAULT_LANGUAGE_CODE!, DEFAULT_LANGUAGE_TRANSLATION())
    }

    loadStoredLanguage() {

        console.log('loadStoredLanguage')
        const {
            language
        } = this.props

        this.initLanguage(language!.currLangCode, language!.currLangTr)
    }

    initTarnslation() {

        const {
            language
        } = this.props

        if (language!.haveStoredLanguage == true) {
            this.loadStoredLanguage()
        } else {
            this.loadDefaultLanguage()
        }
    }

    render() {
        return null
    }


}

const mapSatateToProps = ({ language }: ISystemState) => ({
    language
})

const mergeProps = (stateProps: object, { dispatch }: DispatchProp, ownProps: object) => {

    const { storeLanguageData } = LanguageActions;

    return {
        ...ownProps,
        ...stateProps,
        storeLanguageData: (data: ILanguageState) => storeLanguageData(dispatch, data)
    };
};


export default connect(mapSatateToProps, undefined, mergeProps)(withLocalize(LanguageInitializer))