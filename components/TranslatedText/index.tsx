import React from 'react';
import { TextProps } from 'react-native';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import FontedText from '../FontedText';

interface TranslatedTextProps extends TextProps, LocalizeContextProps {
    text: string
}

const TranslatedText: React.FC<TranslatedTextProps> = (props) => {

    return (
        <FontedText {...props} >
            {props.translate(props.text)}
        </FontedText>
    )
}
export default withLocalize(TranslatedText)