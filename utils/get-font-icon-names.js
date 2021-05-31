// Считывает css файл по указанному пути, берет названия классов и записывает их в json

const iconsFile = "./src/css/core/custom-icons.css";
const jsonFile = "./json/iconNames.json";
const fs = require("fs");

let promise = new Promise((resolve, reject) => {
  fs.readFile(iconsFile, "utf8", function (error, data) {
    console.log("Асинхронное чтение файла");
    if (error) throw error;
    resolve(data);
  });
});

function writeIntoFile(filenName, names, codes) {
  let icons = {};
  icons.icon = [];
  for (i = 0; i < names.length; i++) {
    var obj = {
      iconName: names[i].replace(".", ""),
      iconCode: codes[i].replace("\\", ""),
    };
    icons.icon.push(obj);
  }
  fs.writeFile(filenName, JSON.stringify(icons), function (err) {
    if (err) throw err;
    console.log(`Названия иконок успешно записаны в файл ${filenName}`);
  });
}

async function updateFile() {
  let fileNames = await promise;
  let names = fileNames.match(/\..*:/gi);
  let codes = fileNames.match(/\\.*[0-9, a-z]/gi);
  writeIntoFile(jsonFile, names, codes);
}

updateFile();
