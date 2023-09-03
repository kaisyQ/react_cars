import React from "react";

import Login from "./Login";

import { fetchToLogin } from "../../store/auth/authSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { getIsAuth } from "../../store/auth/authSelector";

const LoginContainer = () => {

    const dispatch = useAppDispatch();

    const isAuth = useAppSelector(state => getIsAuth(state));

    return (
        <>
            <Login isAuth={isAuth} signIn={(email: string, password: string) => { dispatch(fetchToLogin({ email, password }))}} />
        </>
    );
}

export default LoginContainer;