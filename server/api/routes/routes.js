const express = require('express'),
  router = express.Router();

  userController = require('./../controllers/user.controller')
  dataController = require('./../controllers/data.controller')
  eventController = require('./../controllers/event.controller')

  router.get('/data', dataController.listAll);
  router.get('/users', userController.listAll);
  router.get('/events/:userId', eventController.listAll);
  
  router.post('/data', dataController.create);
  router.post('/users', userController.create);
  router.post('/events', eventController.create);
  router.post('/users/authentication', userController.authentication);

module.exports = router;