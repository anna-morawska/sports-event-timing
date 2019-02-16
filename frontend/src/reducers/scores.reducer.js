import {
  RACE_STARTED,
  RACE_FINISHED,
  UPDATE_SCORES_TABLE,
  ADD_NEW_SCORE
} from '../actions/actionTypes';

const initialState = {
  raceStarted: false,
  scores: [],
  finished: [],
  racing: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RACE_STARTED:
      return {
        raceStarted: true,
        scores: [],
        finished: [],
        racing: []
      };
    case RACE_FINISHED:
      return { ...state, raceStarted: false };
    case UPDATE_SCORES_TABLE:
      return {
        raceStarted: action.raceStarted,
        scores: action.scores,
        finished: action.finished,
        racing: action.racing
      };
    case ADD_NEW_SCORE:
      return {
        ...state,
        scores: action.scores,
        finished: action.finished,
        racing: action.racing
      };
    default:
      return state;
  }
};
