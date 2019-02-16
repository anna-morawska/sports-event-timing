const mongoose = require('mongoose');

const Result = mongoose.model('results');
const Athlete = mongoose.model('athletes');

exports.postResults = (req, res, next) => {
  const chipId = req.body.chipId;
  const timingPointId = req.body.timingPointId;
  const time = req.body.time;

  if (timingPointId === 'enter') {
    Athlete.findOne({ chipId }).then(athlete => {
      if (athlete) {
        new Result({
          name: athlete.name,
          startNr: athlete.startNr,
          chipId: athlete.chipId,
          [timingPointId]: time
        })
          .save()
          .then(doc => {
            req.io.emit('realTimeData', doc);
            res.status(201).json({
              data: {
                name: athlete.name,
                startNr: athlete.startNr,
                chipId: athlete.chipId,
                enter: time
              }
            });
          })
          .catch(err => {
            console.log('Something wrong when updating data!');
            res.status(500).send({
              message: 'Something wrong when updating data!',
              error: err
            });
          });
      }
    });
  } else {
    Result.findOneAndUpdate(
      { chipId },
      { $set: { [timingPointId]: time }, $inc: { __v: 1 } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log('Something wrong when updating data!');
          res.status(500).send({
            message: 'Something wrong when updating data!',
            error: err
          });
        }
        req.io.emit('realTimeData', doc);
        res.status(201).json({
          data: {
            name: doc.name,
            startNr: doc.startNr,
            chipId: doc.chipId,
            enter: doc.enter,
            finish: doc.finish
          }
        });
      }
    );
  }
};
