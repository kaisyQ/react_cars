import React from "react";

import { useAppDispatch } from "./hooks/hooks";

import { fetchCheckMe } from "./store/auth/authSlice";

import App from "./App";

const AppContainer = () => {
    
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(fetchCheckMe());
    }, []);

    return (
        <>
            <App />
        </>
    );
}

export default AppContainer;