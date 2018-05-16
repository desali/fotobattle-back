var createError = require('http-errors');
var express = require('express');
//var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');

const cors = require('cors');

// I dont know why I need this code
//var logger = require('morgan');

// Add here routes that you need
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

var app = express();

var mongoose = require("mongoose");
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/fotobattle').then((success) => 
	console.log('Mongoose up'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.options('*', cors());

app.use('', loginRouter);
app.use('', registerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
