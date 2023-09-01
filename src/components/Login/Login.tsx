import React from "react";

import LoginElements from "./LoginElements";

import { signIn } from "../../api/api";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { setIsAuth, setEmail as setEmailStore, setRoles } from "../../store/auth/authSlice";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";
import { getIsAuth } from "../../store/auth/authSelector";
import { Navigate } from "react-router-dom";

const Login = () => {
    
    const isAuth = useAppSelector(state => getIsAuth(state));

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useAppDispatch();

    const submitLogin = async (ev: React.FormEvent) => {
        
        ev.preventDefault();
        
        const response = await signIn(email, password);
    
        if (response.data) {
            dispatch(setIsAuth(true));
            dispatch(setEmailStore(response.data.email));
            dispatch(setRoles(response.data.roles));
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