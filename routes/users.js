var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller.js')

/* GET users listing. */
router.get('/sign-up', user_controller.user_create_get)
router.get('/sign-in', user_controller.user_get)

router.post('/sign-up', user_controller.user_create_post)
router.post('/sign-in', user_controller.user_post)


module.exports = router;
