import React from "react";

import LoginElements from "./LoginElements";

import Input from "../Ui/Input/Input";

import Button from "../Ui/Button/Button";

import { Navigate } from "react-router-dom";


interface ILoginProps {
    isAuth: boolean,
    signIn: (email: string, password: string) => void
}

const Login: React.FC<ILoginProps> = ({ signIn, isAuth }) => {
    

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitLogin = async (ev: React.FormEvent) => {
        
        ev.preventDefault();
        
        signIn(email, password);
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