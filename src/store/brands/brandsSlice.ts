import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBrandsNames } from '../../api/api';

interface IBrandSliceInitialState {
    brandNames: string[]
}

const initialState: IBrandSliceInitialState = {
    brandNames: []
};

export const fetchBrands = createAsyncThunk(
    'brands/fetchBrands',
    async () => {
        const response = await getBrandsNames();
        if (response.status === 200) {
            return response.data;
        }
    }
)
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
    },
    extraReducers(builder) {
        builder.addCase(fetchBrands.fulfilled, (state, action) => {
            state.brandNames = action.payload;
        })
    },
});

const {actions, reducer} = brandsSlice;

export const { setBrandNames, addBrandName } = actions;

export default reducer;

