


var express = require('express');
var router = express.Router();

const providersControllers = require('../controllers/providers')

/* GET home page. */
router.get('/', providersControllers.list) 

router.get('/details/:id', providersControllers.details) 

module.exports = router;