import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { ICar } from '../../types/types';
import { getCars } from '../../api/api';


interface InitialState {

    items: ICar[],

    current: ICar | null
};

const initialState: InitialState = {
    
    items: [],

    current: null
};


export const fetchCars = createAsyncThunk(
    'cars/fetchCars', 
    async () => {
        const response = await getCars();

        if (response.status === 200) {
            return response.data.items;
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice', 
    initialState,
    reducers: {
        setCars: (state, action) => {
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.items = action.payload;
        })
    }
});

export const {actions, reducer} = carsSlice;

export const { setCars, setCurrentCar, addCar, updateCar } = actions;

export default reducer;

