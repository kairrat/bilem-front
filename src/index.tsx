import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import './i18n.ts'
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <Suspense fallback='Loading...'>
      <BrowserRouter>

      <App />

      </BrowserRouter>

    </Suspense>
  </React.StrictMode>
  </Provider>

);


