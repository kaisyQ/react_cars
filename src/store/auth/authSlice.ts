import { createSlice } from '@reduxjs/toolkit';

interface AuthInitialState {
    isAuth: boolean,
    email: string | null,
    roles: string[] | null
}

const initialState: AuthInitialState = {
    isAuth: false,
    email: null,
    roles: null
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
        setRoles: (state, action) => {
            state.roles = action.payload;
        }
    }
});

const {reducer, actions} = authSlice;

export const {setIsAuth, setEmail, setRoles} = actions;

export default reducer;

