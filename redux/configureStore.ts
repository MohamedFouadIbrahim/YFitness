import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
//  const AsyncStorage = require('@react-native-async-storage/ sync-storage/types/index')
// Middlewares
import AppReducers from './index';

const persistConfig = { 
	key: 'root',
	storage: AsyncStorage,
	blacklist: [ // reducer Name from index.ts
		'locale',
		'localize',
		'network',
		'Filter',
		'inspector',
		'navigation',
	],
}

const persistedReducer = persistReducer(persistConfig, AppReducers)

export default () => {
	// let store = createStore(persistedReducer)
	let store = createStore(
    persistedReducer,
    {}, // initial state
  )
	let persistor = persistStore(store)
	return { store, persistor }
}