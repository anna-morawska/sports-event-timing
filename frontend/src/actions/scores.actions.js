import {
  RACE_STARTED,
  RACE_FINISHED,
  UPDATE_SCORES_TABLE,
  ADD_NEW_SCORE
} from './actionTypes';
import { substractTime } from '../utils';
import store from '../store';

export const raceStarted = () => {
  return {
    type: RACE_STARTED,
    scores: [],
    raceStarted: true
  };
};

export const raceFinished = () => {
  return {
    type: RACE_FINISHED,
    raceStarted: false
  };
};

export const updateScoresTable = (currentData, raceStarted) => {
  let currentScores = [];

  currentData.map(score => {
    return (currentScores = updateScores(score, currentData));
  });

  return {
    type: UPDATE_SCORES_TABLE,
    scores: currentScores.currentScores || [],
    racing: currentScores.racing || [],
    finished: currentScores.finished || [],
    raceStarted
  };
};

export const addNewScore = newScore => {
  let currentScores = updateScores(newScore);

  return {
    type: ADD_NEW_SCORE,
    scores: currentScores.currentScores,
    racing: currentScores.racing,
    finished: currentScores.finished
  };
};

const updateScores = (data, currentState) => {
  const scores = currentState || store.getState().scores.scores;
  const currentScores = [...scores];
  let finished = [];
  let racing = [];

  if (
    !currentScores.find(
      score => score.chipId === data.chipId && score.__v === data.__v
    )
  ) {
    if (!data.finish) {
      currentScores.unshift(data);
    } else {
      const indexToUpdate = scores.findIndex(
        score => score.chipId === data.chipId
      );

      const updatedScore = {
        ...scores[indexToUpdate],
        finish: data.finish,
        __v: data.__v
      };
      currentScores[indexToUpdate] = updatedScore;
    }
  }

  racing = currentScores.filter(score => score.finish === undefined);
  finished = currentScores
    .filter(score => score.finish !== undefined)
    .sort((a, b) => sortScores(a, b));

  return { currentScores, finished, racing };
};

const sortScores = (timeA, timeB) => {
  const finishTimeA = +substractTime(timeA.finish, timeA.enter);
  const finishTimeB = +substractTime(timeB.finish, timeB.enter);

  if (finishTimeA < finishTimeB) {
    return -1;
  }

  if (finishTimeA > finishTimeB) {
    return 1;
  }

  return 0;
};
