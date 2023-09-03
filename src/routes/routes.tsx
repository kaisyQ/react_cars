import CarsContainer from "../components/Cars/CarsContainer";

import CarAboutContainer from "../components/CarAbout/CarAboutContainer";

import Login from "../components/Login/Login";

import CarUpdateForm from "../components/CarUpdateForm/CarUpdateForm";

import CarCreateForm from "../components/CarCreateForm/CarCreateForm";

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
        element: <CarCreateForm />
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