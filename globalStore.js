import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

const GLOBAL_STORE = window.ReduxStore || (window.ReduxStore = {
  store: null,
  reducers: null
});

const createNewStore = () => {
  GLOBAL_STORE.store = createStore(
    combineReducers(GLOBAL_STORE.reducers),
    applyMiddleware(thunk)
  );
};

const updateStore = () => {
  GLOBAL_STORE.store.replaceReducer(
    combineReducers(GLOBAL_STORE.reducers)
  );
};

const addReducer = (reducer) => {
  GLOBAL_STORE.reducers = Object.assign({}, GLOBAL_STORE.reducers || {}, reducer);
};

const GlobalStore = {
  getStore(reducer = null) {
    if (reducer) {
      addReducer(reducer);
    }
    if (!GLOBAL_STORE.store) {
      createNewStore();
    } else {
      updateStore();
    }
    return GLOBAL_STORE.store;
  }
};

export default GlobalStore;
