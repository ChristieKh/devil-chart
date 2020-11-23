import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../root-reducer/index';
import rootSaga from "../root-saga";

const initialiseSagaMiddleware = createSagaMiddleware();


const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(initialiseSagaMiddleware)),
);

initialiseSagaMiddleware.run(rootSaga)

export default store;
