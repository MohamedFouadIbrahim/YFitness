import { getLocales } from 'react-native-localize';

// Languages
export const Languages = [
	{ key: 1, label: 'English', name: 'English', code: 'en', isRTL: false, isDefault: false },
	{ key: 2, label: 'العربية', name: 'العربية', code: 'ar', isRTL: true, isDefault: false }
];

export const en = {

	Login: 'ffff'
};

export const ar = {

	Login: 'ttttt'
};

export const DEFAULT_LANGUAGE = Languages.find(item => item.code == getLocales()[0].languageCode)

export const DEFAULT_LANGUAGE_ID = DEFAULT_LANGUAGE?.key
export const DEFAULT_LANGUAGE_CODE = DEFAULT_LANGUAGE?.code

export const DEFAULT_LANGUAGE_TRANSLATION = () => {

	switch (DEFAULT_LANGUAGE_CODE) {
		case 'ar':
			return ar
		case 'en':
			return en
		default:
			return en
	}

}