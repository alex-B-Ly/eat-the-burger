var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var handleB = require('express-handlebars');

var app = express();

// HANDLEBARS
app.engine('handlebars', handleB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLEWARE - public
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));

