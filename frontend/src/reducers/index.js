import { combineReducers } from 'redux';
import scoresReducer from './scores.reducer';
import visibilityFilterReducer from './visibilityFilter.reducer';
import socketReducer from './socket.reducer';

const rootReducer = combineReducers({
  scores: scoresReducer,
  visibilityFilter: visibilityFilterReducer,
  socket: socketReducer
});

export default rootReducer;
