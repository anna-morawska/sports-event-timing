import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';

const initialState = {
  activeTab: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        activeTab: action.payload
      };
    default:
      return state;
  }
};
