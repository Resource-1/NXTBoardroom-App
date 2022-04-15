import * as types from './types';

export const showToast = data => {
  return {
    type: types.SHOW_TOAST,
    payload: data,
  };
};

export const hideToast = () => {
  return {
    type: types.HIDE_TOAST,
  };
};
