const express = require('express'),
  router = express.Router();

  mainController = require('./../controllers/main.controller')

router.get('/', mainController.showHome);

module.exports = router;