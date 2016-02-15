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

tastyBurger.showMeTheBurgers();
// TEST SUCCESS - tastyBurger.addTheBurger works