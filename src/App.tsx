import React from 'react';
import logo from './logo.svg';

import MainRouter from './components/MainRouter/MainRouter';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

import AppElements from './AppElements';

function App() {
  return (
    <AppElements.Wrapper className="App">
    
        <Header />
    
        <Nav />      
        
        <AppElements.ContentWrapper>
    
        
          <MainRouter />
    
        
        </AppElements.ContentWrapper>
    
        
        <Footer />
    
    
    </AppElements.Wrapper>
  );
}

export default App;
