/*
 * To set up the connection to the local MYSQL server, the instructions of
 * https://www.mysqltutorial.org/mysql-nodejs/connect/
 * have been followed in detail.
 * Author: Denis Neumann, 1308358
 */

let rfid = 2409;
let mysql = require("mysql");
let sqlQuery = "SELECT * FROM fahrzeug WHERE RFID = ?";
//let sqlQuery = "SELECT * FROM fahrzeug";

// Credentials of the own server need to be updated!
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DMEMDN",
  database: "fesdlc"
});

connection.connect(function(error) {
  if (error) {
    return console.error("Error occured while connecting: " + error.message);
  }
  console.log("Connected to server:)");
  connection.query(sqlQuery, [rfid], function(error, result, fields) {
  //connection.query(sqlQuery, function(error, result, fields) {
    if (error) {
      return console.error("Error occured: " + error.message);
    }
    console.log(result);
    connection.end(function(error) {
      if (error) {
        return console.log('Error occured while ending connection:' + error.message);
      }
      console.log('Close the database connection.');
    });
  });
});
