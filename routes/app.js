var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
  User.findOne({}, function (err, doc) {
    if (err) {
      return res.send("Something went wrong!");
    }
    res.render('a_node_view', {email: doc.email});
  });
});


router.post('/', function (req,res,next) {
  var email = req.body.email
  var user = new User({
    firstName: "some",
    lastName: "guy",
    email: email,
    password: "soVerySecret"
  });
  user.save();
  res.redirect('/');
})

module.exports = router;
