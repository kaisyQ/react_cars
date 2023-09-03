import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { getCarsItems } from "../../store/cars/carsSelector";

import { fetchCars } from "../../store/cars/carsSlice";

import Cars from "./Cars";

const CarsContainer = () => {

    const cars = useAppSelector(state => getCarsItems(state));

    const dispatch = useAppDispatch();

    React.useEffect(() => {

        dispatch(fetchCars());

    }, []);

    return (
        <>
            <Cars cars={cars} />
        </>
    );
}

export default CarsContainer;