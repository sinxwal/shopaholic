import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import rootSaga from './sagas'
import './index.css';

const store = configureStore(window.__INITIAL_STATE__)
store.runSage(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
