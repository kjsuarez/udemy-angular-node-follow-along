var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
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

router.post('/login', function (req, res, next){
  console.log("email: " + req.body.email);
  User.findOne({email: req.body.email}, function (err, user) {
    if(err) {
      return res.status(500).json({
        title: 'Something went wrong while trying to find this user',
        error: err
      });
    }
    if (!user) {
      console.log("USER NOT FOUND");
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      console.log("BAD PASSWORD");
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'invalid login credentials'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    });
  });
});

module.exports = router;
