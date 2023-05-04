/** Database config for database. */


const { Client } = require("pg");

let db = new Client({
  host: "localhost",
  database: "books",
  password: "3Turtlz6!",
});

db.connect();


module.exports = db;
