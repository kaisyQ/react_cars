import { createSlice } from '@reduxjs/toolkit';
import type { RoleType } from '../../types/types';

interface AuthInitialState {
    isAuth: boolean,
    email: string | null,
    role: RoleType | null
}

const initialState: AuthInitialState = {
    isAuth: false,
    email: null,
    role: null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        }
    }
});

const {reducer, actions} = authSlice;

export const {setIsAuth, setEmail, setRole} = actions;

export default reducer;

