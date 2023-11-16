const fs = require("fs");

function createFile(name, content) {
  fs.writeFile(name, content, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function readFile(name) {
  fs.readFile(name, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else console.log(data);
  });
}

module.exports.createFile = createFile;
module.exports.readFile = readFile;
