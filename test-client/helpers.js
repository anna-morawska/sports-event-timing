const request = require('request');

exports.sortByTime = (a, b) => {
  if (a.time < b.time) {
    return -1;
  }

  if (a.time > b.time) {
    return 1;
  }

  return 0;
};

exports.calcualteIntervals = dataset => {
  return dataset.map((item, index) => {
    let previousTime = index === 0 ? '00:00:00:00' : dataset[index - 1].time;

    return substractTime(previousTime, item.time);
  });
};

exports.postReqIntervals = async (datasetArray, intervalsArray) => {
  await asyncForEach(datasetArray, async (data, index) => {
    await delay(intervalsArray[index]);
    postData(data);
  });
};

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

substractTime = (previousTime, currentTime) => {
  const previousTimeAsDate = new Date(`1970-01-01 ${previousTime}`);
  const currentTimeAsDate = new Date(`1970-01-01 ${currentTime}`);

  return currentTimeAsDate - previousTimeAsDate;
};

postData = data => {
  const clientServerOptions = {
    uri: 'http://localhost:5000/results',
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(clientServerOptions, (error, response) => {
    if (error) {
      console.error(error);
    }
    return;
  });
};
