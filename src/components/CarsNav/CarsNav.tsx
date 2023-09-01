import React from "react";

import CarsNavElements from "./CarsNavElements";

import Button from "../Ui/Button/Button";

import { NavLink } from "react-router-dom";

const CarsNav = () => {
    return (
        <>
            <CarsNavElements.Wrapper>
                <CarsNavElements.Nav>
                    <NavLink to={'/cars/create'}>

                        <Button>Create</Button>

                    </NavLink>
                    
                    <NavLink to={'/cars/update'}>

                        <Button>Update</Button>

                    </NavLink>
                    
                </CarsNavElements.Nav>
            </CarsNavElements.Wrapper>
        </>
    );
}

export default CarsNav;