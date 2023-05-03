/** Database connection for messagely. */

const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  database: "messagely",
  password: "3Turtlz6!",
});

client.connect();

module.exports = client;