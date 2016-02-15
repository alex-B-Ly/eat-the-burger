var orm = require('../config/orm.js');

var tastyBurger = {
  showMeTheBurgers: function(cb){
    orm.showBurgers('burgers', function(res){
      console.log(res);
    });
  },
  addTheBurger: function(burgerName, cb){
    orm.addBurger('burgers', burgerName, cb);
  }
}

module.exports = tastyBurger;
// TEST SUCCESS - tastyBurger.addTheBurger and addTheBurger works