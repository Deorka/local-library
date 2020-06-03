var createError = require('http-errors');
var express = require('express');

//Connect to mongoose
var mongoose = require('mongoose');
//Change the link to your mongoDB
var mongoDB = 'mongodb+srv://username:password@localllibrary-z6cbp.mongodb.net/test';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
 */

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Adds middleware libraries to the request processing chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//processing paths to the request processing chain
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

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
//============================================================================
//Define a scheme
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

// Compile the model from the scheme
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
var schema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    });

module.exports = app;
