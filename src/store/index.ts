import { createStore, combineReducers, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducer as root, IRootState } from './root';

// Enable redux dev tool
const middleware = compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

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
