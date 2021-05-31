import files from "../json/svgIconNames.json";

export default {
  title: "Icons/SVGIcons",
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

const folderPath = './src/img/icons/';
var items = renderZ(folderPath, files.files).join(" ");

const Template = () => {
  return `
  <h3>Путь к картинкам в проекте: /files_content/img/icons/ (количество: ${files.files.length})</h3>
  <div class="Storybook-svgIconsList">${items}</div>`
  ;
};

export const svgIcons = Template.bind({});
