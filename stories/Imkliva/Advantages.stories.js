import '../../src/css/pages/imkliva-alter/imkliva-alter.css'
import '../../src/css/pages/imkliva-alter/imkliva-alter-@media.css'
import iconsList from '../../json/svgIconNames.json'

const icons = iconsList.files.map(el => el.fileName)

export default {
  title: 'Imkliva/Advantages',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
  },
  args: {
    title: 'Все онлайн',
    text: 'Оформление 24/7 во всех регионах страны. Полис всегда будет в личном кабинете.',
    pathToImages: './src/img/icons/'
  },
  argTypes: {
    image: {
      options: icons,
      control: { type: 'select' },
    },
  },
}

const Template = ({ data, ...args }) => {
  return (
    `

        <div class="advantages__item">
          <div class="advantages__item-icon">
              <img src="${args.pathToImages}${args.image}" alt="иконка">
          </div>
          <div class="advantages__item-title">
              ${args.title}
          </div>
          <div class="advantages__item-text">
              ${args.text}
          </div>
        </div>

    `
  )
}

export const Advantages = Template.bind({})
Advantages.args = {
  image: 'certificate.svg',
}



