import files from "../../json/svgIconsBanksBig.json";
const FOLDER_PATH = './src/img/icons-banks/big/';

function selectInputValue (){
  this.select()
}

function renderZ(path,files) {
  var els = [];
  for (let i = 0; i < files.length; i++) {
    let name = files[i].fileName;
    let el = `<div class="Storybook-svgIconsList__item">
      <img src=${path}${name}></img><input value ="${name}"></input>
    </div>`;

    els.push(el);
  }

  return els;
}

var items = renderZ(FOLDER_PATH, files.files).join(" ");

export default {
  title: "Icons/Banks",
};

const Template = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll(
      '.Storybook-svgIconsList__item input')
    inputs.forEach(input => {
      input.onclick = selectInputValue
    })
  })
  return `
  <h3>Путь к картинкам в проекте: /files_content/img/icons-banks/big/ (количество: ${files.files.length})</h3>
  <div class="Storybook-svgIconsList">${items}</div>`
  ;
};

export const BanksBigIcons = Template.bind({});
