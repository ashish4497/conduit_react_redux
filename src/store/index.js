import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware(thunk) // other store enhancers if any
  )
);

// const store = createStore(Reducer, composeWithDevTools());

export default store;
