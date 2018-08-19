import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

import sagas from '../sagas';


const configureStore = () => {
   const sagaMiddleware = createSagaMiddleware();
   return {
       ...createStore(reducers, applyMiddleware(sagaMiddleware)),
       runSaga: sagaMiddleware.run(sagas)
   }

};
export default configureStore;