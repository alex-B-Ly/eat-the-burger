var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.showMeTheBurgers(function(data){
    // TODO Pass {data} in below as second argument using handlebars
    res.render('burgersindex');
  });
});

router.post('/add-burger', function(req, res){
  // Burger method called, takes burger_name from name attr and callback that redirects user to get route above
    // TODO replace 'Beef Heaven' burger with req.body.whatever_is_in_name_attribute
  burger.addTheBurger('Beef Heaven', function(result){
    console.log('Burger added to table');
    res.redirect('/');
  });
});

module.exports = router;

// TEST SUCCESS - home get route and add-burger work (tested with get method)