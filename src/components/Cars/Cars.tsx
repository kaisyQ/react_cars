import React from 'react';

import CarsElements from './CarsElements';

import Car from './Car/Car';

import { getCarsItems } from '../../store/cars/carsSelector';

import { setCars } from '../../store/cars/carsSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { getCars } from '../../api/api';

import { ICar } from '../../types/types';


interface ICarsProps {
    cars: Array<ICar>
}

const Cars: React.FC<ICarsProps> = ({ cars }) => {

    return (
        <>
            <CarsElements.Container>

                <CarsElements.Wrapper>

                    {
                        cars.map(car => <Car key={car.id} {...car} />)
                    }

                </CarsElements.Wrapper>

            </CarsElements.Container>
        </>
    );
}

export default Cars;