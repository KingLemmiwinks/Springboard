const express = require('express');
const axios = require('axios');
const app = express();

app.post('/', function(req, res, next) {
  try {

    if (!req.body.developers) throw new ExpressError("A developer is required.", 400);

    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } 
  catch (err) {
    return next(err);
  }
});

module.exports = app;