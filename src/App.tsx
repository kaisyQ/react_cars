import React from 'react';

import MainRouter from './components/MainRouter/MainRouter';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import CarsNav from './components/CarsNav/CarsNav';

import AppElements from './AppElements';

import { checkMe } from './api/api';

import { useAppDispatch } from './hooks/hooks';

import { setEmail, setIsAuth, setRole } from './store/auth/authSlice';

import type { RoleType } from './types/types';

import { ROLE_ADMIN, ROLE_MANAGER, ROLE_USER } from './constants/constants';

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {

    const fetch = async () => {
  
      const response = await checkMe();
      
      if (response.data) {
        dispatch(setEmail(response.data.email));
        dispatch(setIsAuth(true));
        
        const roles: Array<RoleType> = response.data.roles;
        
        if(roles.find(role => role === ROLE_ADMIN)) {
          dispatch(setRole(ROLE_ADMIN));
          return;
        }
        
        if(roles.find(role => role === ROLE_MANAGER)) {
          dispatch(setRole(ROLE_MANAGER));
          return;
        }
        
        if(roles.find(role => role === ROLE_USER)) {
          dispatch(setRole(ROLE_USER));
          return;
        }
      }
    } 
  
    fetch();
  
  }, []);
  

  return (
    <AppElements.Wrapper className="App">
    
        <Header />     

        <CarsNav />

        <AppElements.ContentWrapper>
    
        
          <MainRouter />
    
        
        </AppElements.ContentWrapper>
    
        
        <Footer />
    
    
    </AppElements.Wrapper>
  );
}

export default App;
