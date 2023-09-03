import React from 'react';

import CarAboutElements from './CarAboutElements';

import { NavLink } from 'react-router-dom';

import Message from '../Message/Message';

import Button from '../Ui/Button/Button';

import { ROLE_MANAGER, ROLE_ADMIN } from '../../constants/constants';

import type { ICar, RoleType } from '../../types/types';

interface ICarAboutProps {
    role: RoleType | null,
    current: ICar,
    id: string | number,
    deleteCar: () => void
}

const CarAbout: React.FC<ICarAboutProps> = ({ current, role, id, deleteCar }) => {

    const onDeleteBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        deleteCar();
    }

    return (
        <>
            <CarAboutElements.Wrapper>

                        
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
                            <Button onClick={onDeleteBtnClick}>Delete</Button>
                        : null
                    }
                </CarAboutElements.ControllBlock>

            </CarAboutElements.Wrapper>
        </>
    );
}

export default CarAbout;