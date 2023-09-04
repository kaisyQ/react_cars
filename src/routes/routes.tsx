import CarsContainer from "../components/Cars/CarsContainer";

import CarAboutContainer from "../components/CarAbout/CarAboutContainer";

import LoginContainer from "../components/Login/LoginContainer";

import CarCreateFormContainer from "../components/CarCreateForm/CarCreateFormContainer";

import CarUpdateFormContainer from "../components/CarUpdateForm/CarUpdateFormContainer";

import type { IRoute } from "../types/types";
import Users from "../components/Users/UserCreate";

const routes: Array<IRoute> = [
    {
        path: '/',
        element: <CarsContainer /> 
    },
    {
        path: '/cars/:id',
        element: <CarAboutContainer />
    },
    {
        path: '/cars/create',
        element: <CarCreateFormContainer />
    },
    {
        path: '/cars/update/:id',
        element: <CarUpdateFormContainer />
    },
    {
        path: '/login',
        element: <LoginContainer />
    },
    {
        path: '/users/create',
        element: <Users />
    }
];

export default routes;