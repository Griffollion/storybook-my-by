import iconsList from "../json/iconNames.json";

function renderIcon(icons) {
  var els = [];
  for (let i = 0; i < icons.length; i++) {
    let iconName = icons[i].iconName.replace(/\:/gi, "");
    let iconCode = icons[i].iconCode;
    let el = `<div class="Storybook-iconsList__item">
      <i class="${iconName}"></i><input value="${iconName}" />
      <input class="Storybook-iconsList__item-code" value ="${iconCode}" />
    </div>`;

    els.push(el)
  }

  return els
}

var icons = renderIcon(iconsList.icon).join(' ')

export default {
  title: 'Icons/FontIcons',
  parameters: {
    notes: `Зависимости: <b>custom-icons.css;</b> \n
    На проекте расположены в глобальном ассете <b>CoreAsset.php</b>`,
  },
}

const Template = () => {
  return `
  <div class="mb-20"><span>Всего иконок: <b>${iconsList.icon.length}</b></span> <span class="pl-20">Версия иконок: <b>1.3</b></span></div>
  <div class="Storybook-iconsList">${icons}</div>`
}

export const Icons = Template.bind({})
