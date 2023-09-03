import React from "react";

import { useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/hooks";

import { useAppDispatch } from "../../hooks/hooks";

import { getCurrentCar } from "../../store/cars/carsSelector";

import { getRole } from "../../store/auth/authSelector";

import { fetchCarById, fetchToDeletCar } from "../../store/cars/carsSlice";

import CarAbout from "./CarAbout";

import Message from "../Message/Message";

const CarAboutContainer = () => {
    
    const { id } = useParams();

    const current = useAppSelector(state => getCurrentCar(state));
    
    const role = useAppSelector(state => getRole(state));
    
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        
        if (!id) {
            return;
        }

        dispatch(fetchCarById(id));

    }, []);
    

    if (!id || !current) {
        return <Message />
    }
    
    return (
        <>
            <CarAbout role={role} current={current} id={id} deleteCar={() => {
                dispatch(fetchToDeletCar(id));
            }} />
        </>
    );
}

export default CarAboutContainer;