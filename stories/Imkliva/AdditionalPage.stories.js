import { TopContentAdditional } from './TopContentAdditional.stories'
import { List } from '../List/Lists.stories'
import {addPropertyToObj} from '../../utils/helpers'

const SITE_URL = 'https://myfin.by/'
const LOGO_NAME = 'logo-myfin_9_let_v2.svg'
const IMKLIVA_LOGO = 'imkliva-logo.svg'
const TOP_BG_1 = 'main-bg.png'
const TOP_BG_2 = 'wave.svg'

export default {
  title: 'Imkliva/Additional Page',
  parameters: {
    notes: `Зависимости: <b>imkliva-alter.css; imkliva-alter-@media.css;</b> \n
    На проекте расположены в ассете <b>ImklivaAlterAsset.php</b>`,
    layout: 'fullscreen',
  },
  args: {
    iframeUrl: 'https://imclient.by/iframe/calculator/event?type=event&amp;partner_id=c87eab58-ef27-4cce-b1c6-4a7a8f4fcdb2',
    iframeHeight: '595',
    TOP_CONTENT: {
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
      image: 'family.png',
    },
    LIST: {
      LIST_ITEM: [
        {
          text: 'впервые диагностированные заболевания, в том числе COVID-19',
          modificator: ''
        },
        {
          text: 'спортивные и бытовые травме',
          modificator: ''
        },
        {
          text: 'острые отравления',
          modificator: ''
        },
        {
          text: 'обморожения и ожоги',
          modificator: ''
        },
        {
          text: 'удар электрическим током или молнией',
          modificator: ''
        },
        {
          text: 'укусы животных',
          modificator: ''
        },
        {
          text: 'анафилактический шока, асфиксия (удушение)',
          modificator: ''
        },
        {
          text: 'установленые группы инвалидности или смерти вследствие выше перечисленных травм или заболеваний',
          modificator: ''
        },
      ],
      type: 'list--check',
      color: ''
    },
    pathToImages: './src/img/pages/custom-page/imkliva-alter/',
    pathToImages2: './src/images/new/',
    rulesLink: 'https://imkliva.by/'
  },
}

const Template = ({ data, ...args }) => {
  let LOGO_URL = args.pathToImages2
  args.TOP_CONTENT.pathToImages = args.pathToImages
  return (`
    <div class="bg-white">
      <section class="imkliva-alter-top-bg" style=" background-image: url('${args.pathToImages}${TOP_BG_1}')">
        <div class="imkliva-alter-top-bg-2" style=" background-image: url('${args.pathToImages}${TOP_BG_2}')"></div>
        <div class="container">
          <div class="imkliva-alter-logo">
              <a href="/">
                  <img src="${LOGO_URL}${LOGO_NAME}" alt="MyFin" title="MyFin">
              </a>
          </div>
          ${TopContentAdditional(args.TOP_CONTENT)}
        </div>
      </section>
      <section class="imkliva-alter-case-list">
          <div class="container">
            <div class="imkliva-alter-title">
              <h2>От чего можно застраховать?</h2>
            </div>
              ${List(args.LIST)}
              <div class="imkliva-alter-rules-link">Все страховые случаи описаны в <a href="${args.rulesLink}" target="_blank" rel="nofollow">Правилах страхования</a></div>
          </div>
      </section>
      <section class="imkliva-alter-iframe">
          <div class="container">
            <div class="imkliva-alter-title">
              <h2>Оформи страхование прямо сейчас!</h2>
              <div class="imkliva-alter-title__img imkliva-alter-title__img--mob-hidden">
                <img src="${args.pathToImages}${IMKLIVA_LOGO}" loading="lazy" alt="лого имклива">
              </div>
            </div>
            <div class="imkliva-alter-iframe__iframe" id="imkliva-frame">
              <iframe src="${args.iframeUrl}" width="100%" height="100%" style="height: ${args.iframeHeight}px;margin:0; padding: 0;border:none" >
              </iframe>
            </div>
          </div>
      </section>
      <div class="imkliva-alter-footer">
              <div>© 2012 – 2021, <a href="${SITE_URL}">Myfin.by</a></div>
      </div>
    </div>
  `)
}

export const AdditionalPage = Template.bind({})
AdditionalPage.storyName = 'Страница подтипа'