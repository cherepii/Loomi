import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LapiService from "./services/lapi-service"
import App from "./components/App"
import { LapiServiceProvider } from './components/lapi-service-context';
import ErrorBoundary from './components/error-boundary';

import { Provider } from 'react-redux';
import store from "./redux/store"


const lapiService = new LapiService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <LapiServiceProvider value={lapiService}>
            <App />
          </LapiServiceProvider>
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));