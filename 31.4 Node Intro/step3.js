const fs = require("fs");
const process = require("process");
const axios = require("axios");

// Write to a file or print the contents

function writeOrPrint(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function(err) {
            if (err) {
                console.error(`Unable to write ${out}: ${err}`);
            }
        });
    }
    else {
        console.log(text);
    }
}

// Read a file and print the contents

function cat(path, out) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        else {
            writeOrPrint(data, out);
        }
    });
}

// Read url page and print the contents

async function webCat(url, out) {
  try {
    let resp = await axios.get(url);
    writeOrPrint(resp.data, out);
  } 
  catch (err) {
    console.error(`Error getting ${url}: ${err}`);
    process.exit(1);
  }
}

let out;
let path;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
}
else {
    path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path, out);
} else {
  cat(path, out);
}