import { createSlice } from '@reduxjs/toolkit';

interface IBrandSliceInitialState {
    brandNames: string[]
}

const initialState: IBrandSliceInitialState = {
    brandNames: []
};

const brandsSlice = createSlice({
    name: 'brandSlice',
    initialState,
    reducers: {
        setBrandNames: (state, action) => {
            state.brandNames = action.payload;
        },
        addBrandName: (state, action) => {
            state.brandNames.push(action.payload);
        }
    }
});

const {actions, reducer} = brandsSlice;

export const {setBrandNames, addBrandName} = actions;

export default reducer;

