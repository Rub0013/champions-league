import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from './sagas.js';
import rootReducer from './reducers.js';

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
