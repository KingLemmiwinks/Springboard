const express = require("express");
const app = express();

const {convertNumsArray, findMode, findMean, findMedian} = require('./operations');

app.get("/mean", function (req, res, next) {

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertNumsArray(numsAsStrings);

  let result = {
    operation: "mean",
    result: findMean(nums),
  };

  return res.send(result);
});

app.get("/median", function (req, res, next) {

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertNumsArray(numsAsStrings);

  let result = {
    operation: "median",
    result: findMedian(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {

  let numsAsStrings = req.query.nums.split(",");
  let nums = convertNumsArray(numsAsStrings);

  let result = {
    operation: "mode",
    result: findMode(nums),
  };

  return res.send(result);
});

app.listen(3000, () => {
  console.log("App on port 3000");
});