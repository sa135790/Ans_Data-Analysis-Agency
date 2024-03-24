


var express = require('express');
var router = express.Router();

const providersControllers = require('../controllers/providers')

/* GET home page. */
router.get('/', providersControllers.list) 


/* Get Providers Details */

router.get('/details/:id', providersControllers.details)

/* Edit Providers Details */
router.get('/edit/:id', providersControllers.edit)

/* update  Providers Details */
router.get('/update/:id', providersControllers.update)

module.exports = router;