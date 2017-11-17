const Event = require('../models/event');

module.exports = {

  create: (req, res) => {    
    let event = new Event(req.body);
    event.save();
    return res.json(event);
  },

  listAll: (req, res) => {    
    Event.find({ userId: req.params.userId }, (err, event) => {
      if (err) {
       res.send(err);
      }
      res.json(event);
    })    
  }
}