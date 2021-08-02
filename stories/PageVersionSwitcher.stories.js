import '../src/css/components/page-version-switcher/page-version-switcher.css'
import '../src/css/components/page-version-switcher/page-version-switcher-@media.css'
import pageVersionSwitcherScripts from  '../src/js/components/page-version-switcher/page-version-switcher.js'

export default {
  title: 'Components/Page verison switcher',
  parameters: {
    notes: `Зависимости: <b>page-version-switcher.css; page-version-switcher-@media.css; page-version-switcher.js</b> \n
    На проекте расположены в ассете <b>PageVersionSwitcherAsset.php</b>`,
  },
  args: {
    title: 'Новая версия',
    tooltip: {
      title: 'Мы разработали новый дизайн',
      text: 'Вернуться к старому виду вы можете в меню',
    }
  },
}

const Template = ({ ...args }) => {
  document.addEventListener('DOMContentLoaded', pageVersionSwitcherScripts)
  return (
    `<div class="page-version-switcher">
        <div class="page-version-switcher__title">${args.title}</div>
        <div class="page-version-switcher__switcher page-version-switcher__switcher--default" data-data-page-version-switcher="toggler">
          <input type="checkbox" id="page-version-switcher" name="page-version-switcher" value="on" />
          <label class="label" for="page-version-switcher">${args.title}</label>
        </div>
        <div class="page-version-switcher__tooltip">
            <div class="page-version-switcher__tooltip-close" data-page-version-switcher="tooltip-close"></div>
            <div class="page-version-switcher__tooltip-title">${args.tooltip.title}</div>
            <div class="page-version-switcher__tooltip-text">${args.tooltip.text}</div>
        </div>
    </div>`
  )
}

export const PageVersionSwitcher = Template.bind({})