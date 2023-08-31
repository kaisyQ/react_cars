import React from 'react';

import CarElements from './CarElements';

import { ArrowRight } from 'react-bootstrap-icons';

import {NavLink} from 'react-router-dom';

import type { ICar } from '../../../types/types';

interface ICarProps extends ICar {

}

const Car: React.FC<ICarProps> = ({name, brand, slug, id}) => {
    return (
        <>

            <CarElements.Wrapper>

                <NavLink to={`cars/${id}`}>

                    <CarElements.InfoWrapper>

                        <CarElements.CarInfo>

                            <CarElements.Model>
                                {name}
                            </CarElements.Model>

                            <CarElements.Brand>
                                {brand.name}
                            </CarElements.Brand>


                            <CarElements.Rudder>
                                {brand.wheelPosition}
                            </CarElements.Rudder>

                        </CarElements.CarInfo>

                        <CarElements.Arrow>

                            <ArrowRight size={'2rem'} />

                        </CarElements.Arrow>

                    </CarElements.InfoWrapper>
                </NavLink>

            </CarElements.Wrapper>

        </>
    );
}

export default Car;