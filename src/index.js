import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LapiService from "./services/lapi-service"
import { Provider } from 'react-redux';
import store from "./redux/store"

import App from "./components/App"
import ErrorBoundary from './components/common/error-boundary';
import { ApiContext } from './contexts/apiContext';
import { GlobalStyles } from './components/GlobalStyles';


const apiService = new LapiService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <ApiContext.Provider value={{apiService}}>
            <GlobalStyles />
            <App />
          </ApiContext.Provider>
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));