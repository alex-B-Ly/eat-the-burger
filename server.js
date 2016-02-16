var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var handleB = require('express-handlebars');
var PORT = process.env.NODE_ENV || 8080;

var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

// HANDLEBARS
app.engine('handlebars', handleB({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLEWARE - public
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('PORT: ',PORT);
});