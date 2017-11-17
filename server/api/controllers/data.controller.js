const Data = require('../models/data');

module.exports = {

  create: (req, res) => {    
    let data = new Data(req.body);
    data.save();
    return res.json(data);
  },

  listAll: (req, res) => {    
    Data.find({}, (err, data) => {
      if (err) {
       res.send(err);
      }
      res.json(data);
    })    
  }
}