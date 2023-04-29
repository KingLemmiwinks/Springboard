const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  database: "lunchly",
  password: "3Turtlz6!",
});

client.connect();

module.exports = client;