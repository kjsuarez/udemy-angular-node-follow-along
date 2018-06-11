var express = require('express');
var router = express.Router();
var Message = require('../models/message')

router.get('/', function (req, res, next) {
  Message.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'an error occured while retrieving messages',
          error: err
        });
      }
      res.status(200).json({
        message: 'success',
        obj: messages
      });
    });
});

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

});

module.exports = router;
