import React from 'react';

import Logo from './../../images/logo.png';

import HeaderElements from './HeaderElements';

import { NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { getEmail, getIsAuth } from '../../store/auth/authSelector';

import Button from '../Ui/Button/Button';

import { BoxArrowRight } from 'react-bootstrap-icons';

import { logout } from '../../api/api';

import { setEmail, setRole, setIsAuth } from '../../store/auth/authSlice';

const Header = () => {
    
    const email = useAppSelector(state => getEmail(state));
    
    const isAuth = useAppSelector(state => getIsAuth(state));
    
    const dispatch = useAppDispatch();

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
                            
                            <button onClick={async () => {
                                const response = await logout();
                                if (response.status === 200) {
                                    dispatch(setEmail(null)); 
                                    dispatch(setRole(null)); 
                                    dispatch(setIsAuth(false));
                                }
                            }}>
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
