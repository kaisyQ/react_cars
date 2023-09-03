import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { RoleType } from '../../types/types';

import { ROLE_USER, ROLE_MANAGER, ROLE_ADMIN } from '../../constants/constants';

import { checkMe, logout, signIn } from '../../api/api';

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

export const fetchCheckMe = createAsyncThunk(
    'auth/checkMe',
    async () => {
        const response = await checkMe();
        if (response.status === 200) {
            return response.data;
        }
    }
);

export const fetchToLogin = createAsyncThunk(
    'auth/login',
    async ({email, password}: {
        email: string,
        password: string
    }) => {
        const response = await signIn(email, password);
        if (response.status === 200) {
            return response.data;
        }
    }
);

export const fetchToLogout = createAsyncThunk(
    'auth/logout',
    async () => {
        const response = await logout();
        if (response.status === 200) {
            return true;
        }
    }
)


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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCheckMe.fulfilled, (state, action) => {
            
            state.isAuth = true;
            
            state.email = action.payload.email;

            const roles: Array<RoleType> = action.payload.roles;
        
            if(roles.find(role => role === ROLE_ADMIN)) {
                state.role = ROLE_ADMIN; 
                return;
            }
        
            if(roles.find(role => role === ROLE_MANAGER)) {
                state.role = ROLE_MANAGER; 
                return;
            }
        
            if(roles.find(role => role === ROLE_USER)) {
                state.role = ROLE_USER; 
                return;
            }
        })

        builder.addCase(fetchToLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            
            state.email = action.payload.email;

            const roles: Array<RoleType> = action.payload.roles;
        
            if(roles.find(role => role === ROLE_ADMIN)) {
                state.role = ROLE_ADMIN; 
                return;
            }
        
            if(roles.find(role => role === ROLE_MANAGER)) {
                state.role = ROLE_MANAGER; 
                return;
            }
        
            if(roles.find(role => role === ROLE_USER)) {
                state.role = ROLE_USER; 
                return;
            }
        })

        builder.addCase(fetchToLogout.fulfilled, (state, action) => {
            if (action.payload) {
                state.email = null; 
                state.role = null;
                state.isAuth = false;
            }
        })
    }
});

const {reducer, actions} = authSlice;

export const {setIsAuth, setEmail, setRole} = actions;

export default reducer;

