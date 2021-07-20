import '../../src/js/core/helpers'
import { TopContentMain } from './TopContentMain.stories'
import { Advantages } from './Advantages.stories'
import { InsuranceType } from './InsuranceType.stories'
import {renderElements} from '../../utils/helpers'
import {addPropertyToObj} from '../../utils/helpers'

const SITE_URL = 'https://myfin.by/'
const LOGO_NAME = 'logo-myfin_9_let_v2.svg'

const TOP_BG_1 = 'main-bg.png'
const TOP_BG_2 = 'wave.svg'



export default {
  title: 'Imkliva',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
    layout: 'fullscreen',
  },
  args: {
    TOP_CONTENT: {
      title: 'Оnline-cтрахование с Imkliva Insurance',
      text: 'страховая компания с 27-летним опытом работы на финансовом рынке Беларуси.',
      textAccent: 'Imkliva Insurance - ',
      image: 'imkliva-logo.svg',
    },
    ADVANTAGES: [
      {
        title: 'Все онлайн',
        text: 'Оформление 24/7 во всех регионах страны. Полис всегда будет в личном кабинете.',
        image: 'certificate.svg',
      },
      {
        title: 'Это просто',
        text: 'Стоимость можно посчитать на онлайн-калькуляторе, а оформление займет не больше 10 минут.',
        image: 'icon-on-map.svg',
      },
      {
        title: 'Быстрое урегулирование',
        text: 'Выплата денег по страховому случаю в течение 10 дней.',
        image: 'icon-hand-shake.svg',
      },
    ],
    INSURANCE_TYPE: [
      {
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
        image: 'family.png',
        link: '/health',
      },
      {
        title: 'Страхование в путешествиях',
        subtitle: 'Страхование от несчастных случаев для взрослых и детей',
        params: [
          {
            title: 'от 6.03 BYN',
            subtitle: 'Страховой взнос',
          },
          {
            title: 'до 70 000 USD/EUR',
            subtitle: 'Страховая сумма',
          },
          {
            title: 'до 90 дней',
            subtitle: 'Срок страхования',
          },
        ],
        image: 'pointers.png',
        link: '/travel',
      },
      {
        title: 'Страхование недвижимости и имущества',
        subtitle: 'Страхование от несчастных случаев для взрослых и детей',
        params: [
          {
            title: 'от  9.60 BYN',
            subtitle: 'Страховой взнос',
          },
          {
            title: 'до 300 000 BYN',
            subtitle: 'Страховая сумма',
          },
          {
            title: 'до 3 лет',
            subtitle: 'Срок страхования',
          },
        ],
        image: 'armchair.png',
        link: '/property',
      },
    ],
    imklivaImagesPath: './src/img/pages/custom-page/imkliva-alter/',
    logoImgPath: './src/images/new/',
    iconsPath: './src/img/icons/'
  },
}

const Template = ({ data, ...args }) => {
  let LOGO_URL = args.logoImgPath
  args.TOP_CONTENT.pathToImages = args.imklivaImagesPath
  addPropertyToObj(args.ADVANTAGES, 'pathToImages', args.iconsPath)
  addPropertyToObj(args.INSURANCE_TYPE, 'pathToImages',  args.imklivaImagesPath)
  return (`
    <div class="bg-white">
      <section class="imkliva-alter-top-bg" style=" background-image: url('${args.pathToImages}${TOP_BG_1}')">
      <div class="imkliva-alter-top-bg-2" style=" background-image: url('${args.pathToImages}${TOP_BG_2}')"></div>
        <div class="container">
          <div class="imkliva-alter-logo">
              <a href="/">
                  <img src="${LOGO_URL}${LOGO_NAME}" loading="lazy" alt="MyFin" title="MyFin">
              </a>
          </div>
          ${TopContentMain(args.TOP_CONTENT)}
          <div class="imkliva-alter-advantages">
              <div class="advantages">
                  ${renderElements(args.ADVANTAGES, Advantages)}
              </div>
          </div>
        </div>
      </section>
      <section class="imkliva-alter-insurance-type" id="imkliva-insurance-type">
          <div class="container">
              <div class="insurance-type-container">
                  ${renderElements(args.INSURANCE_TYPE, InsuranceType)}
              </div>
          </div>
      </section>
      <div class="imkliva-alter-footer">
              <div>© 2012 – 2021, <a href="${SITE_URL}">Myfin.by</a></div>
      </div>
    </div>
  `)
}

export const MainPage = Template.bind({})
MainPage.storyName = 'Главная страница'