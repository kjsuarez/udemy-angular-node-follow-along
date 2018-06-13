var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  user.save(function (err, result) {
    if(err) {
      return res.status(500).json({
        title: 'Something went wrong while trying to save this user',
        error: err
      });
    }
    res.status(201).json({
      message: 'user saved',
      obj: result
    });
  });
});

module.exports = router;
