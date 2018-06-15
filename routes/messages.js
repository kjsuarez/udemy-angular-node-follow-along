var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Message = require('../models/message');

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

router.use('/', function (req, res, next) {
  jwt.verify(req.query.token, 'secret', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'User not Authenticated :(',
        error: err
      });
    }
    next();
  });
});


router.post('/', function (req, res, next) {
  console.log("got this far");
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'Something went tits up',
        error: err
      });
    }
    var message = new Message({
      content: req.body.body,
      user: user._id
    });
    message.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Something went tits up',
          error: err
        });
      }
      user.messages.push(result);
      user.save();
      res.status(201).json({
        message: 'saved message',
        obj: result
      });
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


router.delete('/:id', function(req, res, next){
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
    message.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Something went tits up',
          error: err
        });
      }
      res.status(200).json({
        message: 'deleted message',
        obj: result
      });
    });
  });
});

module.exports = router;
