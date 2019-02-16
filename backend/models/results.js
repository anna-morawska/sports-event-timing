const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultSchema = new Schema({
  startNr: Number,
  name: String,
  enter: String,
  finish: String,
  chipId: String
});

mongoose.model('results', resultSchema);
