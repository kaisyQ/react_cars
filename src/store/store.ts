import { combineReducers, configureStore } from "@reduxjs/toolkit";

import carsReducer from './cars/carsSlice';
import authReducer from './auth/authSlice';
import brandsReducer from './brands/brandsSlice';

const reducer = combineReducers({
    cars: carsReducer,
    auth: authReducer,
    brands: brandsReducer
});


const store = configureStore({
    reducer: reducer
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;