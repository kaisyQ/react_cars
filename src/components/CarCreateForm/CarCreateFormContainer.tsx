import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { getBrandNames } from "../../store/brands/brandsSelector";

import { fetchBrands } from "../../store/brands/brandsSlice";

import { fetchToCreateCar } from "../../store/cars/carsSlice";

import CarCreateForm from "./CarCreateForm";

import type { WheelType } from "../../types/types";

const CarCreateFormContainer = () => {
    
    const dispatch = useAppDispatch();

    const brandNames = useAppSelector(state => getBrandNames(state));

    React.useEffect(() => {
        dispatch(fetchBrands());
    }, [])

    return (
        <>
            <CarCreateForm brandNames={brandNames} 
                createCar={(name: string, brandName: string, wheelPosition: WheelType) => 
                    dispatch(fetchToCreateCar({name, brandName, wheelPosition}))}
            />
        </>
    );
}

export default CarCreateFormContainer;