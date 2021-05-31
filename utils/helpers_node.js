const svgFolder = "./src/images/icons/svg";
const fs = require("fs");

var promise = new Promise((resolve, reject) => {
  fs.readdir(svgFolder, (err, files) => {
    var fileNames = [];

    files.forEach((file) => {
      fileNames.push(file);
    });

    return resolve(fileNames);
  });
  
});

async function load() {
  let fileNames =  await promise;
}

