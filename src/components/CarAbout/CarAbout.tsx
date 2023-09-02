import React from 'react';

import axios from 'axios';

import CarAboutElements from './CarAboutElements';

import {useParams, NavLink} from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { getCurrentCar } from '../../store/cars/carsSelector';

import { setCurrentCar } from '../../store/cars/carsSlice';

import Message from '../Message/Message';

import { deleteCar, getCarById } from '../../api/api';

import Button from '../Ui/Button/Button';
import { getRole } from '../../store/auth/authSelector';
import { ROLE_MANAGER, ROLE_ADMIN } from '../../constants/constants';


const CarAbout = () => {

    const {id} = useParams();

    const current = useAppSelector(state => getCurrentCar(state));


    const role = useAppSelector(state => getRole(state));
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


                
                <CarAboutElements.ControllBlock>
                    {
                        role === ROLE_ADMIN  || role === ROLE_MANAGER ? 
                        <NavLink to={`/cars/update/${id}`}>
                            <Button>Update</Button>
                        </NavLink>
                        : null
                    }

                    {
                        role === ROLE_ADMIN  ? 
                            <Button onClick={async () => {
                                if (!id) {
                                    return;
                                }
                                const response = await deleteCar(id);
                                console.log(response);

                            }}>Delete</Button>
                        : null
                    }
                </CarAboutElements.ControllBlock>

            </CarAboutElements.Wrapper>
        </>
    );
}

export default CarAbout;