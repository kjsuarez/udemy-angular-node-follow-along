var express = require('express');
var router = express.Router();
var Message = require('../models/message')

router.post('/', function (req, res, next) {
  console.log(req.body.body);
  var message = new Message({
    content: req.body.body
  });
  message.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'Something went tits up',
        error: err
      });
    }
    res.status(201).json({
      message: 'saved message',
      obj: result
    });
  });

})

module.exports = router;
