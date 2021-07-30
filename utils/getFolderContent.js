const svgFolders = ["./src/img/icons/", "./src/img/icons-banks/small/", "./src/img/icons-banks/big/"];
const jsonFiles = ["./json/svgIconNames.json", "./json/svgIconsBanksSmall.json", "./json/svgIconsBanksBig.json"];
const fs = require("fs");

var promises = svgFolders.map(svgFolder => {
  return new Promise((resolve, reject) => {
    fs.readdir(svgFolder, (err, files) => {
      const fileNames = [];
      files.forEach((file) => {
        fileNames.push(file);
      });
      resolve(fileNames);
    });
  });
})

function writeIntoFile(fileName, data) {
  let names = {};
  names.files = [];
  for (i = 0; i < data.length; i++) {
    var obj = {
      fileName: data[i],
    };
    names.files.push(obj);
  }
  fs.writeFile(fileName, JSON.stringify(names), function (err) {
    if (err) throw err;
    console.log(`Названия файлов успешно записаны в файл ${fileName}`);
  });
}

promises.forEach((promise, i) => {
  promise.then(result => writeIntoFile(jsonFiles[i], result))
})

