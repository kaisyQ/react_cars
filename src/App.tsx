import React from 'react';

import MainRouter from './components/MainRouter/MainRouter';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import CarsNav from './components/CarsNav/CarsNav';

import AppElements from './AppElements';

import { checkMe } from './api/api';

import { useAppDispatch } from './hooks/hooks';

import { setEmail, setIsAuth, setRoles } from './store/auth/authSlice';

function App() {

  const dispatch = useAppDispatch();

  React.useEffect(() => {

    const fetch = async () => {
  
      const response = await checkMe();
      if (response.data) {
        dispatch(setEmail(response.data.email));
        dispatch(setRoles(response.data.roles));
        dispatch(setIsAuth(true));
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
