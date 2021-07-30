import '../src/css/components/currencies-info/currencies-info.css'
import '../src/css/components/currencies-info/currencies-info-@media.css'
import { renderImg } from '../utils/helpers'

const IMG_FOLDER_PATH = './src/img/icons-crypto/'
const CURRENCIES = [
  {
    img: 'btc.png',
    name: 'BTC',
    data: '57 867.1$',
    direction: 'up',
    link: '#'
  },
  {
    img: 'eth.png',
    name: 'ETH',
    data: '1 802.51$',
    direction: 'up',
    link: '#'
  },
  {
    img: 'zec.png',
    name: 'ZEC',
    data: '149.84$',
    direction: 'down',
    link: '#'
  }]

const renderItems = (arr) => {
  let result = ''
  arr.forEach(item => {
    result += `
    <div class="currencies-info__item-cell">
      <a href="${item.link}" class="currencies-info__item">
        <span class="currencies-info__item-icon">
          ${renderImg(IMG_FOLDER_PATH + item.img, item.name)}
        </span>
        <span class="currencies-info__item-name">
            ${item.name}
        </span>
        <span class="currencies-info__item-data">
            ${item.data}
        </span>
        <span class="currencies-info__item-direction down">
            <i class="ic-arrow-${item.direction}"></i>
        </span>
      </a>
    </div>
    `
  })

  return result
}

export default {
  title: 'Components/Currencies Info',
  parameters: {
    notes: `Зависимости: <b>currencies-info.css; currencies-info-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesInfoAsset.php</b>`,
  },
  args: {
    title: 'Курсы криптовалют',
    currencies: CURRENCIES
  }
}

const Template = ({ data, ...args }) => {
  return (`
    <div class="currencies-info">
    <div class="currencies-info__title">
        <a href="#">${args.title}</a>
    </div>
    ${renderItems(args.currencies)}
</div>
  `)
}

export const CurrenciesInfo = Template.bind({})
CurrenciesInfo.storyName = 'Информация о курсах'