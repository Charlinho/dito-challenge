const User = require('../models/user');

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
        req.session.userId = user._id;
      }
    });
  }
}