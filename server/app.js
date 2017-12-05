


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

var app = express();

app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression({ threshold: 0 }));


// Angular2 is in the dist folder
app.use(express.static(path.join(__dirname, '../dist')));


app.all('*', (req, res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);

  if (req.method == "OPTIONS") {
    res.send("OPTIONS SUCCESS");
  } else {
    next();
  }
});
// ROUTES
// Main route for all API call requests
var apiRoute = require('./routes/main-route');
app.use('/api',  apiRoute);

// All login screen routes
var loginRoute = require('./routes/login-route');
app.use('/loginApi', loginRoute);

// Route all unknown paths back to the index page


module.exports = app;
