import React from 'react';

import CarsElements from './CarsElements';

import Car from './Car/Car';

import axios from 'axios';

import { getCarsItems } from '../../store/cars/carsSelector';

import { setCars } from '../../store/cars/carsSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCars } from '../../api/api';




const Cars = () => {

    const cars = useAppSelector(state => getCarsItems(state));

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const fetch = async function () {
            const response = await getCars();
            dispatch(setCars(response.data.items));
        }
        fetch()
    }, [])

    return (
        <>
            <CarsElements.Container>

                <CarsElements.Wrapper>

                    {
                        cars.map(car => <Car key={car.id} {...car}/>)
                    }

                </CarsElements.Wrapper>

            </CarsElements.Container>
        </>
    );
}

export default Cars;