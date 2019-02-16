import { SOCKET_CONNECTED } from './actionTypes';

export const socketConnected = socket => {
  return {
    type: SOCKET_CONNECTED,
    payload: socket
  };
};
