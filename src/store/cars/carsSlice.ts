import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { ICar, WheelType } from '../../types/types';
import { createCar, deleteCar, getCarById, getCars } from '../../api/api';


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

export const fetchCarById = createAsyncThunk(
    'cars/fetchCarById',
    async (id: string) => {
        const response = await getCarById(id);
        if (response.status === 200) {
            return response.data;
        }
    }
);

export const fetchToDeletCar = createAsyncThunk(
    'cars/fetchToDeleteCar',
    async (id: string) => {
        const response = await deleteCar(id);
        console.log(response);
        if (response.status === 200) {
            return response.data.id;
        }
    }
);

export const fetchToCreateCar = createAsyncThunk(
    'cars/fetchToCreateCar',
    async ({ name, brandName, wheelPosition} : {
            name: string, 
            brandName: string, 
            wheelPosition: WheelType
        }) => {
        
            const response = await createCar(name, brandName, wheelPosition);
            
            if (response.status === 200) {
                console.log(response);
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
        builder.addCase(fetchCarById.fulfilled, (state, action) => {
            state.current = action.payload;
        })
        builder.addCase(fetchToDeletCar.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
    },
});

export const { actions, reducer } = carsSlice;

export const { setCars, setCurrentCar, addCar, updateCar } = actions;

export default reducer;

