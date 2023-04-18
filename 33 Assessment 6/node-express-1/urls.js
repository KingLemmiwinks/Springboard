const fs = require("fs");
const axios = require("axios");
const process = require("process");

function readFile(path) {
  fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } 
    else {
    const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
    console.log(arr);
    writeFile(arr);
    }
  });
}

async function writeFile(urls) {
  let resp;
  for (let url of urls) {
    if (url !== "") {
      try {
        resp = await axios.get(url);
      } catch (err) {
        console.error(`Couldn't download ${url}`);
        process.exit(1);
      }
      let fileName = url.split("/")[2];
      fs.writeFile(fileName, resp.data, (err) => {
        if (err) {
          return console.error(err);
        }
      });
      console.log(`Wrote to ${fileName}`);
    }
  }
}

let [path] = process.argv.slice(2);

readFile(path);