var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I WILL HAVE SO MANY AWESOME TEAS...');
});

module.exports = router;
