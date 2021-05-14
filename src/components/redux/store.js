import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

import { fetchCollectionStart } from './shop/shop.sagas';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

