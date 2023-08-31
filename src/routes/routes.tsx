import Cars from "../components/Cars/Cars";
import CarAbout from "../components/CarAbout/CarAbout";
import CarForm from "../components/CarForm/CarForm";


import type { IRoute } from "../types/types";

const routes: IRoute[] = [
    {
        path: '/',
        element: <Cars /> 
    },
    {
        path: '/cars/:id',
        element: <CarAbout />
    },
    {
        path: '/cars/create',
        element: <CarForm />
    }
];

export default routes;