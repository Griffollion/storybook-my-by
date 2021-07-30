import files from "../../json/svgIconsBanksSmall.json";

const FOLDER_PATH = './src/img/icons-banks/small/';

export default {
  title: "Icons/Banks",
};

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

const Template = () => {
  return `
  <h3>Путь к картинкам в проекте: /files_content/img/icons-banks/small/ (количество: ${files.files.length})</h3>
  <div class="Storybook-svgIconsList">${items}</div>`
  ;
};

export const BanksSmallIcons = Template.bind({});
