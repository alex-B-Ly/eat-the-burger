var connection = require('./connection.js');

connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', ['Big Mac', true], function(err, res){
  if(err){ throw err }

  console.log('Inserted a new burger');
});