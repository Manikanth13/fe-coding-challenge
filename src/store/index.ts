import { createStore, combineReducers, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducer as root, IRootState } from './root';

const middleware = compose(applyMiddleware(thunk));

export interface IAppState {
  root: IRootState;
}

// Create redux store
const store: Store<IAppState> = createStore(
  combineReducers({
    root
  }),
  middleware,
);

export default store;
