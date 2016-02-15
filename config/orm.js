var connection = require('./connection.js');

// TODO Create orm object with SQL insertion methods for exportation
var orm = {
  // Add burger to main area
  addBurger: function(table, burger, callBack){
    var q = 'INSERT INTO ' + table + '(burger_name, devoured) VALUES (?,?);';
    connection.query(q, [burger, false], function(err, res){
      if(err){ throw err }
      // callBack(res);
    });
  }
  // TODO Devour burger, update db to show devoured

}

module.exports = orm;