import React from "react";

import Header from "./Header";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { fetchToLogout } from "../../store/auth/authSlice";

import { getEmail, getIsAuth } from "../../store/auth/authSelector";

const HeaderContainer = () => {

    const email = useAppSelector(state => getEmail(state));
    
    const isAuth = useAppSelector(state => getIsAuth(state));

    const dispatch = useAppDispatch();
    
    return (
        <>
            <Header
                email={email}
                isAuth={isAuth} 
                logout={() => {dispatch(fetchToLogout())}}
            />
        </>
    );
}

export default HeaderContainer;