import { SET_APP_VERSION } from './actions';

export interface IRootState {
  version: string;
}

const initState: IRootState = {
  version: '1.0.0',
};

const reducerMethods = {
  [SET_APP_VERSION]: (state: IRootState, { payload }): IRootState => {
    return {
      ...state,
      version: payload.version,
    }
  },
};

const Reducer = (state = initState, action: any) => {
  if (reducerMethods[action.type]) {
    return reducerMethods[action.type](state, action);
  }

  return state;
};

export default Reducer;