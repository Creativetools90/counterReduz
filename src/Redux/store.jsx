import { configureStore } from '@reduxjs/toolkit'
import randomNameReducer from './randomName/RandomNameSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import ShoppingSliceReducer from './shopping/ShoppingSlice'
const persistConfig = {
    key : 'root',
    version : 1,
    storage
}

const reducer = combineReducers({
    randomName: randomNameReducer, 
    cart : ShoppingSliceReducer,
})
const persistedReducer = persistReducer(persistConfig , reducer)
export const store = configureStore({
  reducer: persistedReducer
})