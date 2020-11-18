import rootReducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "./createStore";

export const testStore = (initialState) => {
  const createStoreWithMW = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMW(rootReducers, initialState);
};
