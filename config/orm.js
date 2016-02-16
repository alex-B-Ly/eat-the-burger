var connection = require('./connection.js');

// TODO Create orm object with SQL insertion methods for exportation
var orm = {
  // Show all the burgers
  showBurgers: function(table, callBack){
    var q = 'SELECT * FROM ' + table;
    connection.query(q, function(err, res){
      if(err){ throw err }
      callBack(res);
    });
  },
  // Add burger to main area
  addBurger: function(table, burger, callBack){
    var q = 'INSERT INTO ' + table + '(burger_name, devoured) VALUES (?,?);';
    connection.query(q, [burger, false], function(err, res){
      if(err){ throw err }
      callBack(res);
    });
  },
  // Devour burger, update db to show devoured
  devourBurger: function(table, burger_id, callBack){
    var q = 'UPDATE ' + table + ' SET devoured = true WHERE id = ?;';
    connection.query(q, [burger_id], function(err, res){
      if(err){ throw err }
      callBack(res);
    });
  }
}

module.exports = orm;