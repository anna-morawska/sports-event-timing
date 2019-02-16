const app = require('express')();
const dataset = require('./dataset.json').dataset;
const helpers = require('./helpers');

const datasetArray = dataset.sort(helpers.sortByTime);
const intervals = helpers.calcualteIntervals(datasetArray);

app.get('/start', async (req, res, next) => {
  await helpers.postReqIntervals(datasetArray, intervals);
  res.send('ok');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Fakes digital timing server points is runnig on port: http://localhost:${PORT}/ `
  );
});
