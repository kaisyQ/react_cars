import React from "react";

import LoginElements from "./LoginElements";

import { signIn } from "../../api/api";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { setIsAuth, setEmail as setEmailStore, setRole } from "../../store/auth/authSlice";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";
import { getIsAuth } from "../../store/auth/authSelector";
import { Navigate } from "react-router-dom";

import { ROLE_USER, ROLE_MANAGER, ROLE_ADMIN } from "../../constants/constants";

import type { RoleType } from "../../types/types";

const Login = () => {
    
    const isAuth = useAppSelector(state => getIsAuth(state));

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useAppDispatch();

    const submitLogin = async (ev: React.FormEvent) => {
        
        ev.preventDefault();
        
        const response = await signIn(email, password);
    
        if (response.data) {
            dispatch(setEmailStore(response.data.email));
            dispatch(setIsAuth(true));
            
            const roles: Array<RoleType> = response.data.roles;
            
            if(roles.find(role => role === ROLE_ADMIN)) {
                dispatch(setRole(ROLE_ADMIN));
                return;
            }
            
            if(roles.find(role => role === ROLE_MANAGER)) {
                dispatch(setRole(ROLE_MANAGER));
                return;
            }
            
            if(roles.find(role => role === ROLE_USER)) {
                dispatch(setRole(ROLE_USER));
                return;
            }
        }
    } 

    if (isAuth) {
        return <Navigate to={'/'} />
    }

    return (
        <>

            <LoginElements.Wrapper>

                <LoginElements.Form onSubmit={submitLogin}>

                    <Input title="Email*" value={email} onChange={(ev) => setEmail(ev.target.value)} />

                    <Input title="Password*" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    
                    <Button>Sign in</Button>

                </LoginElements.Form>

            </LoginElements.Wrapper>

        </>
    );

}

export default Login;