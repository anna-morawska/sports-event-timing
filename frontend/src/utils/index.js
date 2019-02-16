export const substractTime = (finishTime, enterTime) => {
  finishTime = convertTime(finishTime);
  enterTime = convertTime(enterTime);
  const time = (finishTime - enterTime) / 1000;

  return time.toFixed(2);
};

const convertTime = timeString => {
  const time = timeString.split(':');
  const hours = +time[0];
  const minutes = +time[1];
  const seconds = +time[2];
  const mseconds = +time[3];

  return new Date(1970, 1, 1, hours, minutes, seconds, mseconds);
};
