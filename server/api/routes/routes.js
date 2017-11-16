const express = require('express'),
  router = express.Router();

  userController = require('./../controllers/user.controller')

  router.post('/users', userController.create);  
  router.post('/users/authentication', userController.authentication);

module.exports = router;