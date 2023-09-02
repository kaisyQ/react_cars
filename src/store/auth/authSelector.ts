import { RootState } from "../store";

export const getIsAuth = (state: RootState) => state.auth.isAuth;

export const getEmail = (state: RootState) => state.auth.email;

export const getRole = (state: RootState) => state.auth.role;
