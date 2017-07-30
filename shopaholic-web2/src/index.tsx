import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { enthusiasm } from './reducers/index';
import { StoreState } from './interfaces/index';
import App from './App';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore<StoreState>(
    enthusiasm, 
    {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    }, 
    applyMiddleware(sagaMiddleware),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);

sagaMiddleware.run(rootSaga);

registerServiceWorker();
