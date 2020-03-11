import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./root-reducer";
import { fetchCollectionsRequest } from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsRequest);

export const persistor = persistStore(store);

export default store;
