var orm = require('../config/orm.js');

var tastyBurger = {
  showMeTheBurgers: function(cb){
    orm.showBurgers('burgers', function(res){
      cb(res);
    });
  },
  addTheBurger: function(burgerName, cb){
    orm.addBurger('burgers', burgerName, cb);
  },
  devourThatBurger: function(burgerId, cb){
    orm.devourBurger('burgers', burgerId, cb);
  }
}

module.exports = tastyBurger;
// TEST SUCCESS - tastyBurger.addTheBurger and addTheBurger works