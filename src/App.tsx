import React from 'react';

import MainRouter from './components/MainRouter/MainRouter';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import CarsNav from './components/CarsNav/CarsNav';

import AppElements from './AppElements';

const App = () => {

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
