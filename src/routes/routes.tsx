import CarsContainer from "../components/Cars/CarsContainer";

import CarAboutContainer from "../components/CarAbout/CarAboutContainer";

import Login from "../components/Login/Login";

import CarUpdateForm from "../components/CarUpdateForm/CarUpdateForm";

import CarCreateFormContainer from "../components/CarCreateForm/CarCreateFormContainer";

import type { IRoute } from "../types/types";

const routes: IRoute[] = [
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
        element: <CarUpdateForm />
    },
    {
        path: '/login',
        element: <Login />
    },
];

export default routes;