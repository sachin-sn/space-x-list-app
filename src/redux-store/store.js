import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleWare = [thunk];

function configureStore(
  state = {
    isLoading: true,
    filter: [],
  }
) {
  return createStore(reducer, state, applyMiddleware(...middleWare));
}

export default configureStore;
