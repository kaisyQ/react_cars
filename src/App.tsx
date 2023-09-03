import React from 'react';

import MainRouter from './components/MainRouter/MainRouter';

import HeaderContainer from './components/Header/HeaderContainer';

import Footer from './components/Footer/Footer';

import CarsNav from './components/CarsNav/CarsNav';

import AppElements from './AppElements';

const App = () => {

  return (
    
    <AppElements.Wrapper className="App">
    
        <HeaderContainer />     

        <CarsNav />

        <AppElements.ContentWrapper>
    
          <MainRouter />
        
        </AppElements.ContentWrapper>
    
        
        <Footer />
    
    
    </AppElements.Wrapper>
  );
}

export default App;
