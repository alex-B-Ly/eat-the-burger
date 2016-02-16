var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.showMeTheBurgers(function(burgerData){
    res.render('burgersindex', {burgerData});
  });
});

router.post('/add-burger', function(req, res){
  // Burger method called, takes burger_name from name attr and callback that redirects user to get route above
  burger.addTheBurger(req.body.burger_input, function(result){
    console.log('Burger added to table');
    res.redirect('/');
  });
});

router.post('/devour', function(req, res){
  // Burger method called, takes burger_id from name attr and sets devoured to true
  burger.devourThatBurger(req.body.burger_id, function(result){
    console.log('You have devoured that burger, you glutton!');
    res.redirect('/');
  });
});

module.exports = router;

// TEST SUCCESS - home get route, add-burger and devour work