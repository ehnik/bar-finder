var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller.js')

/* GET users listing. */
router.get('/', user_controller.user_create_get)

router.post('/', user_controller.user_create_post)

module.exports = router;
