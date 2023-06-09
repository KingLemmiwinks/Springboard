const express = require("express");
const app = express();
const itemsRoutes = require("./items");
const ExpressError = require("./expressError");

app.use(express.json());
app.use("/items", itemsRoutes);

// 404 //

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

// Error //

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});