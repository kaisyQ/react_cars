import { combineReducers, configureStore } from "@reduxjs/toolkit";

import carsReducer from './cars/carsSlice';


const reducer = combineReducers({
    cars: carsReducer
});


const store = configureStore({
    reducer: reducer
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;