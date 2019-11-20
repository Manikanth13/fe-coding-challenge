export const ROOT = '@root';
export const SET_APP_VERSION = '@root/SET_APP_VERSION';

export const setAppVersion = (version: string) => async (dispatch: any, getState: any) => {
  await dispatch({ type: SET_APP_VERSION, payload: version });
}
