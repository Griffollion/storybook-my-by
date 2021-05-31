// Считывает css файл по указанному пути, берет названия классов и записывает
// их в json

const modificatorFile = './src/css/global-styles/margins.css'
const jsonFile = './json/marginModificators.json'
const fs = require('fs')

let promise = new Promise((resolve, reject) => {
  fs.readFile(modificatorFile, 'utf8', function (error, data) {
    console.log('Асинхронное чтение файла')
    if (error) {
      throw error
    }
    resolve(data)
  })
})

function writeIntoFile (filenName, names) {
  let modificators = {}
  modificators.modificator = []
  for (i = 0; i < names.length; i++) {
    var obj = {
      modificatorName: names[i].replace('.', ''),
    }
    modificators.modificator.push(obj)
  }
  fs.writeFile(filenName, JSON.stringify(modificators), function (err) {
    if (err) {
      throw err
    }
    console.log(`Названия модификаторов успешно записаны в файл ${filenName}`)
  })
}

async function updateFile () {
  let fileNames = await promise
  let names = fileNames.match(/\..*\d/gi)
  console.log(names)
  writeIntoFile(jsonFile, names)
}

updateFile()
