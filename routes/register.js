var express = require('express');
var router = express.Router();

const User = require('../models/users');

/* GET users listing. */
router.post('/api/register', async (req, res, next) => {
  const {fullname, username, email, password, city, birthdate, gender} = req.body;

  const user = new User({
  	username: username,
	fullname: fullname,
	email: email,
	city: city,
	birthdate: birthdate,
	gender: gender,
	password: password,
	status: "",
	avatar: "",
	background: "",
	coins: 0
  });

  const result = await user.save();

  if(!result) {
  	res.json({
      success: false
  	});
  } else {
  	res.json({
  		success: true
  	});
  }
});

module.exports = router;
