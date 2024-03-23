

var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/main')

/* GET home page. */
router.get('/', mainControllers.home) 

router.get('/about', mainControllers.about) 
router.get('/contact', mainControllers.contact) 
router.get('/error', mainControllers.error) 
router.get('/forgot-password', mainControllers.forgotpassword) 
router.get('/layout', mainControllers.layout) 
router.get('/login', mainControllers.login) 
router.get('/register', mainControllers.register) 



 module.exports = router;
