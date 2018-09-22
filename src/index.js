import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-114897335-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
