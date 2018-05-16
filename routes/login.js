var express = require('express');
var router = express.Router();

const User = require('../models/users');

/* GET users listing. */
router.post('/api/login', async (req, res, next) => {
  const {username, password} = req.body;

  const result = await User.findOne({username, password});

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
