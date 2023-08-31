import React from "react";

import NavElements from "./NavElements";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Nav = () => {

    const remove = async () => {
            const response = await axios.delete(`http://localhost:8000/models/delete/${10}`);
            console.log(response)
    }
    return (
        <>
            <NavElements.Wrapper>

                <NavElements.BtnWrapper>

                    <NavLink to={'/cars/create'}>

                        <NavElements.Btn>
                            
                            Create

                        </NavElements.Btn>

                    </NavLink>

                </NavElements.BtnWrapper>


                <NavElements.BtnWrapper>

                    <NavLink to={'/cars/create'}>

                        <NavElements.Btn>
                            
                            Update

                        </NavElements.Btn>

                    </NavLink>

                </NavElements.BtnWrapper>


                <NavElements.BtnWrapper>

                    <NavElements.Btn onClick={remove}>
                        
                        Delete

                    </NavElements.Btn>

                </NavElements.BtnWrapper>
                

            </NavElements.Wrapper>
        </>
    );  
}

export default Nav;