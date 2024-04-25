const fs = require("fs").promises;

module.exports = (filePath, json) => {
  fs.writeFile(filePath, json, { flag: "w" });
};
