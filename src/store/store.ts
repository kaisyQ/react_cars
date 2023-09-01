import { combineReducers, configureStore } from "@reduxjs/toolkit";

import carsReducer from './cars/carsSlice';
import authReducer from './auth/authSlice';

const reducer = combineReducers({
    cars: carsReducer,
    auth: authReducer
});


const store = configureStore({
    reducer: reducer
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;