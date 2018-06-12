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

router.patch('/:id', function (req, res, next) {
  Message.findById(req.params.id, function(err, message) {
    if (err) {
      return res.status(500).json({
        title: 'error retrieving message',
        error: err
      });
    }
    if (!message) {
      return res.status(500).json({
        title: 'could not find message',
        error: {message: 'message not found'}
      });
    }
    message.content = req.body.body;
    message.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Something went tits up',
          error: err
        });
      }
      res.status(200).json({
        message: 'updated message',
        obj: result
      });
    });
  });
});

module.exports = router;
