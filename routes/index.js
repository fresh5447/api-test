var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/t', function(req, res) {
  res.render('index', { title: 'CodingHouse', name: 'Nick' });
});

router.get('/t42', function(req, res) {
  res.render('index42', { title: 'The Dark Side', name: 'Nick' });
});

module.exports = router;
