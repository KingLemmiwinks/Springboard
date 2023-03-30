const fs = require("fs");
const process = require("process");
const axios = require('axios');

// Read url page and print the contents

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    }
    catch(err) {
        console.error(`Error getting ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}