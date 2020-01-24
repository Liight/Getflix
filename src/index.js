import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import moviesReducer from "./store/reducers/movies";
import uiReducer from "./store/reducers/ui";

import thunk from "redux-thunk";

// adding middleware and redux dev tools
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// combine reducers
const rootReducer = combineReducers({
  movies: moviesReducer,
  ui: uiReducer
});

// define store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// define app & add store to app
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
