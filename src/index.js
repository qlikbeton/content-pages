import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './assets/less/globals.css';

// import 'core-js/fn/array/find';
// import 'core-js/fn/object/entries';
// import 'core-js/fn/array/includes';
// import 'core-js/fn/number/is-nan';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('qlikbeton'));

registerServiceWorker();
