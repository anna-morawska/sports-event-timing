const mongoose = require('mongoose');
const { Schema } = mongoose;

const athletesSchema = new Schema({
  name: String,
  surname: String,
  startNr: Number,
  chipId: String
});

mongoose.model('athletes', athletesSchema);
