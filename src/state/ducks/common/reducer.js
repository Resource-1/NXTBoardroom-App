import _ from 'lodash';

import * as types from './types';
import {Toast} from '../../../utils/variable';

const initialState = {
  isLoading: false,
  visible: false,
  type: Toast.SUCCESS,
  message: null,
  barStyle: 'dark-content',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_TOAST:
      return {
        ...state,
        visible: true,
        type: _.get(action, 'payload.type', true),
        message: _.get(action, 'payload.message', null),
      };
    case types.HIDE_TOAST:
      return {
        ...state,
        visible: false,
        message: null,
      };
    default:
      return state;
  }
};

export default reducer;
