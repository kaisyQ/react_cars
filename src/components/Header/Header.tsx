import React from 'react';

import Logo from './../../images/logo.png';

import HeaderElements from './HeaderElements';

import { NavLink } from 'react-router-dom';

import Button from '../Ui/Button/Button';

import { BoxArrowRight } from 'react-bootstrap-icons';

interface IHeaderProps {
    email: string | null,
    isAuth: boolean,
    logout: () => void
}

const Header: React.FC<IHeaderProps> = ({ logout, email, isAuth }) => {
    
    const onLogoutBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        logout();
    }

    return (
        <>

            <HeaderElements.Wrapper>


                <HeaderElements.LogoWrapper>

                    <NavLink to={'/'}>
                
                        <HeaderElements.Logo src={Logo} alt="" />

                    </NavLink>

                </HeaderElements.LogoWrapper>

                {
                    isAuth ? <>
                        <HeaderElements.UserWrapper>
                            
                            
                            <HeaderElements.Email>
                                { email }
                            </HeaderElements.Email>
                            
                            <button onClick={onLogoutBtnClick}>
                                <BoxArrowRight size={'3rem'} color='white' cursor={'pointer'} />
                            </button>
                        </HeaderElements.UserWrapper>
                    </> : <>
                    
                        <NavLink to={'/login'}>
                            <Button>
                                Sign in
                            </Button>
                        </NavLink>
                    
                    </>
                }
            </HeaderElements.Wrapper>
        
        </>
    );
}

export default Header;
