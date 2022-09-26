var express = require('express');
var router = express.Router();


var arithmetic = require('./controllers/arithmetic');
router.use('/arithmetic', arithmetic);


var trignometry = require('./controllers/trignomery');
router.use('/trignometry', trignometry);

var bitwise = require('./controllers/bitwise');
router.use('/bitwise', bitwise);

var matrixoperation = require('./controllers/matrixoperation');
router.use('/matrixoperation', matrixoperation);

module.exports = router;