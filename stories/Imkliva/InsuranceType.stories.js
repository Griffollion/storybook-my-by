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
      <div class="insurance-type__param">
        <div class="insurance-type__param-title">${param.title}</div>
        <div class="insurance-type__param-subtitle">${param.subtitle}</div>
      </div>
    `
  })

  return params
}

export default {
  title: 'Imkliva/Insurance Type',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
  },
  args: {
    title: 'Страхование жизни и здоровья',
    subtitle: 'Страхование от несчастных случаев для взрослых и детей',
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
    link: {
      options: [
        '/health',
        '/travel',
        '/property',
      ],
      control: { type: 'select' },
    }
  }


}

const Template = ({ data, ...args}) => {
  return (
    `
    <a href="${args.link}" class="insurance-type">
        <div class="insurance-type__img">
            <img src="${args.pathToImages}${args.image}" loading="lazy" alt="картинка">
        </div>
        <div class="insurance-type__content">
          <h2 class="insurance-type__title">${args.title}</h2>
          <div class="insurance-type__subtitle">${args.subtitle}</div>
          <div class="insurance-type__params">
              ${renderParams(args.params)}
          </div>
          <div class="insurance-type__btn">
              ${Button(BUTTON_CONFIG)}
          </div>
        </div>
    </a>
    `
  )
}

export const InsuranceType = Template.bind({})
InsuranceType.args = {
  image: 'family.png',
  link: '/health'
}



