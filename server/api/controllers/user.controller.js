const User = require('../models/user');
const jwt = require('jsonwebtoken')

module.exports = {

  create: (req, res) => {
    let user = new User(req.body);
    user.save();
    return res.json(user);
  },

  authentication: (req, res, next) => {    
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {      
        return res.json({_id: user._id, name: user.name, lastName: user.lastName, email: user.email, token: jwt.sign({_id: user._id}, 'SECRET'), expiresIn: 86400});
      }
    });
  },

  listAll: (req, res) => {
    User.find({}, function(err, user) {
      if (err) {
        res.send(err);
      } 
      res.json(user);
    })
  }
}