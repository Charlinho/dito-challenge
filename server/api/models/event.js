const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const EventSchema = new Schema({
  userId: String,
  name: String,
  word: String,
  date: {
    type: Date,
    default: Date.now
  }  
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;