import '../../src/css/pages/imkliva-alter/imkliva-alter.css'
import '../../src/css/pages/imkliva-alter/imkliva-alter-@media.css'
import { Button } from '../Buttons.stories'

const BUTTON_CONFIG = {
  type: 'btn-default btn--full',
  content: 'Оформить  ',
  tag: 'div',
}

export default {
  title: 'Imkliva/Top Content Main',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
  },
  args: {
    title: 'Оnline-cтрахование с Imkliva Insurance',
    text: 'страховая компания с 27-летним опытом работы на финансовом рынке Беларуси.',
    textAccent: 'Imkliva Insurance - ',
    image: 'imkliva-logo.svg',
    pathToImages: './src/img/pages/custom-page/imkliva-alter/',
  }
}

const Template = ({ data, ...args }) => {
  return (
    `
      <div class="imkliva-top-content-main">
        <div class="imkliva-top-content-main__content">
          <div class="imkliva-top-content-main__title">
            <h1>${args.title}</h1>
          </div>
          <p class="imkliva-top-content-main__text">
            <span class="accent">${args.textAccent}</span>${args.text}
          </p>
          <div class="imkliva-top-content-main__btn" data-js="slowly" data-href="#imkliva-insurance-type">
            ${Button(BUTTON_CONFIG)}
          </div>
        </div>
        
        <div class="imkliva-top-content-main__img">
            <img src="${args.pathToImages}${args.image}" loading="lazy" alt="картинка">
        </div>
      </div>
    `
  )
}

export const TopContentMain = Template.bind({})



