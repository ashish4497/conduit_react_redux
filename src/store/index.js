import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

// const store = createStore(Reducer, composeWithDevTools());

export default store;
