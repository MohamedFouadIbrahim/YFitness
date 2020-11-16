import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import { reducer as LoginReducer } from './LoginRedux';
import { reducer as LangReducer } from './LangRedux';

const AppReducers = combineReducers({
	login: LoginReducer,
	localize: localizeReducer,
	language: LangReducer
});

export default AppReducers;