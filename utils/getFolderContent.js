const svgFolders = ["./src/img/icons/", "./src/img/icons-banks/small"];
const jsonFiles = ["./json/svgIconNames.json","./json/svgIconsBanksSmall.json"];
const fs = require("fs");

var promise = new Promise((resolve, reject) => {
  svgFolders.forEach(svgFolder => {
    fs.readdir(svgFolder, (err, files) => {
      var fileNames = [];

      files.forEach((file) => {
        fileNames.push(file);
      });

      resolve(fileNames);
    });
  })

});

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

async function updateFile() {
  let fileNames = await promise;
  jsonFiles.forEach(jsonFile => {
    writeIntoFile(jsonFile, fileNames)
  })
}

updateFile();
