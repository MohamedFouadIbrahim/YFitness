import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import { reducer as LoginReducer } from './LoginRedux';

const AppReducers = combineReducers({
	login: LoginReducer
});

export default AppReducers;