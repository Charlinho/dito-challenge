const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const DataSchema = new Schema({
  title: String,
  description: String,
  imgUrl: String
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;