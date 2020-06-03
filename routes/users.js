var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//http://localhost:3000/users/cool/
router.get('/cool', function(req, res, next) {
  res.render('users', { user: 'Well, you are cool!' });
});


module.exports = router;
