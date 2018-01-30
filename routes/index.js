var express = require('express');
var bars_controller = require('../controllers/bars_controller')
var router = express.Router();

/* GET home page. */
router.get('/', bars_controller.bars_get);

router.post('/', bars_controller.bars_post);

module.exports = router;
