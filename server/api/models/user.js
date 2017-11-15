const bcrypt = require('bcrypt');
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  let user = this;  
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

UserSchema.statics.authenticate = function (email, password, callback) {  
  User.findOne({ email: email}, function(err, user) {
    if (!user) {      
      let err = new Error('User not found, check your email.');
      err.status = 401;
      return callback(err);
    } else {
      console.log('password', password);
      bcrypt.compare(password, user.password, function (err, result) {           
          console.log('result', result);
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
      });
    }
  }); 
}

const User = mongoose.model('User', UserSchema);

module.exports = User;