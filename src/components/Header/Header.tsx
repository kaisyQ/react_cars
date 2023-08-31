import React from 'react';

import Logo from './../../images/logo.png';

import HeaderElements from './HeaderElements';

import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <>

            <HeaderElements.Wrapper>


                <HeaderElements.LogoWrapper>

                    <NavLink to={'/'}>
                
                        <HeaderElements.Logo src={Logo} alt="" />

                    </NavLink>

                </HeaderElements.LogoWrapper>

            </HeaderElements.Wrapper>
        
        </>
    );
}

export default Header;
