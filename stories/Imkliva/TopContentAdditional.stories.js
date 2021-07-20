import '../../src/css/pages/imkliva-alter/imkliva-alter.css'
import '../../src/css/pages/imkliva-alter/imkliva-alter-@media.css'
import { Button } from '../Buttons.stories'

const BUTTON_CONFIG = {
  type: 'btn-default btn--full',
  content: 'Оформить  ',
  tag: 'div',
}

const renderParams = (arr) => {
  let params = ``
  arr.forEach(param => {
    params += `
      <div class="imkliva-top-content-additional__param">
        <div class="imkliva-top-content-additional__param-title">${param.title}</div>
        <div class="imkliva-top-content-additional__param-subtitle">${param.subtitle}</div>
      </div>
    `
  })

  return params
}

export default {
  title: 'Imkliva/Top Content Additional',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
  },
  args: {
    title: 'Страхование от несчастных случаев для взрослых и детей',
    params: [
      {
        title: 'от 8.90 BYN',
        subtitle: 'Страховой взнос',
      },
      {
        title: 'до 20 000 BYN',
        subtitle: 'Страховая сумма',
      },
      {
        title: '1-3 года',
        subtitle: 'Срок страхования',
      },
    ],
    pathToImages: './src/img/pages/custom-page/imkliva-alter/',
  },
  argTypes: {
    image: {
      options: [
        'family.png',
        'armchair.png',
        'pointers.png',
      ],
      control: { type: 'select' },
    },
  },
}

const Template = ({ data, ...args }) => {
  return (
    `
      <div class="imkliva-top-content-additional">
        <div class="imkliva-top-content-additional__content">
          <div class="imkliva-top-content-additional__title">
            <h1>${args.title}</h1>
          </div>
          <div class="imkliva-top-content-additional__params">
            ${renderParams(args.params)}
          </div>
          <div class="imkliva-top-content-additional__btn" data-js="slowly" data-href="#imkliva-frame">
            ${Button(BUTTON_CONFIG)}
          </div>
        </div>
        
        <div class="imkliva-top-content-additional__img">
            <img src="${args.pathToImages}${args.image}" loading="lazy" alt="картинка">
        </div>
      </div>
    `
  )
}

export const TopContentAdditional = Template.bind({})
TopContentAdditional.args = {
  image: 'family.png',
}



