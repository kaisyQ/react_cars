import React from 'react';

import axios from 'axios';

import CarAboutElements from './CarAboutElements';

import {useParams} from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { getCurrentCar } from '../../store/cars/carsSelector';

import { setCurrentCar } from '../../store/cars/carsSlice';

import Message from '../Message/Message';
import { getCarById } from '../../api/api';

const CarAbout = () => {

    const {id} = useParams();

    const current = useAppSelector(state => getCurrentCar(state));

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        
        const fetch = async () => {
            
            if (id) {
                
                const response = await getCarById(id);
                
                dispatch(setCurrentCar(response.data));
            
            }
        }

        fetch();
    }, []);

    return (
        <>
            <CarAboutElements.Wrapper>

                {
                    current ? <>
                        
                        <CarAboutElements.InfoWrapper>

                            <CarAboutElements.Model>
                            
                                {current.name}
                            
                            </CarAboutElements.Model>


                            <CarAboutElements.Brand>
                            
                                {current.brand.name}
                            
                            </CarAboutElements.Brand>


                            <CarAboutElements.RudderPostion>
                            
                                {current.brand.wheelPosition}
                            
                            </CarAboutElements.RudderPostion>

                        </CarAboutElements.InfoWrapper>
                    
                    </> : <Message />
                }


            </CarAboutElements.Wrapper>
        </>
    );
}

export default CarAbout;