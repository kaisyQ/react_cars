import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBrandsNames } from '../../api/api';

import { createBrand } from '../../api/api';

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
);

export const fetchToCreateBrand = createAsyncThunk(
    'brands/fetchToCreateBrand',
    async (brandName: string) => {
        const response = await createBrand(brandName);
        return response.data.brandName;
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
        builder.addCase(fetchToCreateBrand.fulfilled, (state, action) => {
            state.brandNames.push(action.payload);
        })
    },
});

const {actions, reducer} = brandsSlice;

export const { setBrandNames, addBrandName } = actions;

export default reducer;

