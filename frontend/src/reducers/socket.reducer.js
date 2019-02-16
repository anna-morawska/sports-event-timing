import { SOCKET_CONNECTED } from '../actions/actionTypes';

const initialState = {
  socket: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_CONNECTED:
      return {
        socket: action.payload
      };
    default:
      return state;
  }
};
