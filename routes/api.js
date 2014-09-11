var express = require("express");

var router = express.Router();

router.get("/test", function(req, res) {
  res.json({method: 'GET', serverTime: new Date()});
});

router.post("/test", function(req, res) {
  var output = req.body;
  output['postDataNumberOfKeys'] = Object.keys(req.body).length;
  output['method'] = 'POST';
  output['serverTime'] = new Date();
  res.json(output);
});

module.exports = router;
