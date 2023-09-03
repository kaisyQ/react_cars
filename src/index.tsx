import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import AppContainer from './AppContainer';

import { BrowserRouter }from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
