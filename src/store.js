import { createStore, applyMiddleware } from 'redux';
import logger from  'redux-logger';
import rootReducers from './reducers';

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger));

export default store;