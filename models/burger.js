var orm = require('../config/orm.js');

var tastyBurger = {
  addTheBurger: function(burgerName, cb){
    orm.addBurger('burgers', burgerName, cb);
  }
}

tastyBurger.addTheBurger('Mayo Mountain');