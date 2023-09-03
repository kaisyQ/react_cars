import React from "react";

import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import { getBrandNames } from "../../store/brands/brandsSelector";

import { fetchCarById, fetchToUpdateCar } from "../../store/cars/carsSlice";

import { getCurrentCar } from "../../store/cars/carsSelector";

import { fetchBrands } from "../../store/brands/brandsSlice";

import CarUpdateForm from "./CarUpdateForm";

import type { WheelType } from "../../types/types";

import Message from "../Message/Message";

const CarUpdateFormContainer = () => {

    const { id } = useParams();

    const dispatch = useAppDispatch();

    const brandNames = useAppSelector(state => getBrandNames(state));

    const currentCar = useAppSelector(state => getCurrentCar(state));

    
    React.useEffect(() => {

        if (!id) {
            return;
        }

        dispatch(fetchCarById(id));
            
    }, []);


    React.useEffect(() => {

        dispatch(fetchBrands());
            
    }, []);


    if (!id || !currentCar) {
        return <Message />
    }

    return (
        <>
            <CarUpdateForm 
                id={id} 
                brandNames={brandNames} 
                currentCar={currentCar} 
                updateCar={
                    (id: string, name: string, brandName: string, wheelPosition: WheelType) => dispatch(fetchToUpdateCar({id, name, brandName, wheelPosition}))
                }
            />
        </>
    );
}

export default CarUpdateFormContainer;