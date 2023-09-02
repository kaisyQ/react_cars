import React from "react";

import CarsNavElements from "./CarsNavElements";

import Button from "../Ui/Button/Button";

import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../hooks/hooks";

import { getRole } from "../../store/auth/authSelector";

import { ROLE_ADMIN } from "../../constants/constants";

const CarsNav = () => {

    const role = useAppSelector(state => getRole(state));

    return (
        <>
        {
            role === ROLE_ADMIN ? <>
                <CarsNavElements.Wrapper>
                    <CarsNavElements.Nav>

                        <NavLink to={'/cars/create'}>

                            <Button>Create</Button>

                        </NavLink>
                        
                    </CarsNavElements.Nav>
                </CarsNavElements.Wrapper>
            </> : null
        }
        </>
    );
}

export default CarsNav;