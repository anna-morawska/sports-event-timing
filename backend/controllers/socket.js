const mongoose = require('mongoose');
const io = require('../index');
const Result = mongoose.model('results');
const Athlete = mongoose.model('athletes');
const request = require('request');
let race = false;

module.exports = socket => {
  Result.find({}, (err, data) => {
    socket.emit('currentData', data, race);
  });

  socket.on('start', () => {
    io.emit('raceStart');
    race = true;

    mongoose.connection.db
      .listCollections({ name: 'results' })
      .next((err, collinfo) => {
        if (collinfo) {
          mongoose.connection.db.dropCollection('results', (err, result) =>
            console.log('Old result collection has been droped')
          );
        }
      });

    request(
      {
        uri: 'http://localhost:4000/start',
        method: 'GET'
      },
      (error, response) => {
        io.emit('raceFinish');
        race = false;
        return;
      }
    );
  });
};
