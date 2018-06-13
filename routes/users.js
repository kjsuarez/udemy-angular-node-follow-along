var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: bcrypt.hashSync(req.body.email, 10),
    password: req.body.password
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
