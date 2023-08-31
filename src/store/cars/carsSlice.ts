import {createSlice} from '@reduxjs/toolkit'

import type { ICar } from '../../types/types';


interface InitialState {

    items: ICar[],

    current: ICar | null
};

const initialState: InitialState = {
    
    items: [],

    current: null
};

const carsSlice = createSlice({
    name: 'carsSlice', 
    initialState,
    reducers: {
        setCars: (state, action) => {
            console.log(action.payload)
            debugger
            state.items = action.payload;
        },
        setCurrentCar: (state, action) => {
            state.current = action.payload
        },
        addCar: (state, action) => {
            state.items.push(action.payload);
        },
        updateCar: (state, action) => {
            state.items = state.items.filter(car => {
                if (car.id !== action.payload.id) {
                    return car;
                }
                return {
                    ...action.payload
                }
            })
        }
    }
});

export const {actions, reducer} = carsSlice;

export const { setCars, setCurrentCar, addCar, updateCar } = actions;

export default reducer;

