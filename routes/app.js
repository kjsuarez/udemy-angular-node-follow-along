var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
  res.render('a_node_view', {message: "I'm passed in from the router!"});
})

module.exports = router;
