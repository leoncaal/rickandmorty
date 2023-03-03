import reducer from './reducer'
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";// permite hacer peticiones a un servidor

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar con la extension del navegador redux dev tools

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // es para poder hacer las peticiones a un server
);

export default store;