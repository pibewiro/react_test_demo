import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewares = [thunk];

export const createstorewithmiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createstorewithmiddleware(rootReducer);
