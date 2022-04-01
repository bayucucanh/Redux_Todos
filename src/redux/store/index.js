import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import TodosReducer from '../reducers'

const Reducers = {
  appData: TodosReducer
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const configPersist = persistReducer(persistConfig, combineReducers(Reducers))

export const Store = createStore(configPersist, applyMiddleware(ReduxThunk))
export const persistStor = persistStore(Store)