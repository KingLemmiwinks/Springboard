const fs = require('fs');
const process = require('process');

// Read a file and print the contents

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            // on error
            console.error(err);
            // kill the process and display error code
            ProcessingInstruction.exit(1);
        }
        // on success
        console.log(data);
    });
    console.log('reading file...');
}

cat(process.argv[2]);