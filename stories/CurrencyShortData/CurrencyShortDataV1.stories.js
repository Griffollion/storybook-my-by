import '../../src/css/components/currency-short-data/currency-short-data.css'
import '../../src/css/components/currency-short-data/currency-short-data-@media.css'
import { renderImg } from '../../utils/helpers'
import  {Currency} from '../Currency.stories'

const IMG_FOLDER_PATH = './src/img/icons-currency/'
const CURRENCIES = [
  {
    img: 'usd.svg',
    name: 'usd',
    buy: '2.5933',
    sale: '2.5933',
    buyBanksCount: '4 банка',
    saleBanksCount: '5 банков',
    link: '#'
  },
  {
    img: 'eur.svg',
    name: 'eur',
    buy: '3.0947',
    sale: '3.0453',
    buyBanksCount: '3 банка',
    saleBanksCount: '5 банков',
    link: '#'
  },
  {
    img: 'rub.png',
    name: 'rub',
    buy: '3.5453',
    sale: '2.5933',
    buyBanksCount: '13 банков',
    saleBanksCount: '5 банков',
    link: '#'
  }]

const renderHeaders = (arr, tag) => {
  let result = ''
  arr.forEach(item => {
    result += `
      <${tag}>${item}</${tag}>
    `
  })

  return result
}

const renderItems = (data, template) => {
  let result = ''
  data.forEach(data => {
    result += `<tr>
                <td>${template({ currency: data.name})}</td>
                <td>
                    <div>${data.buy}</div>
                    <div><span class="currency-short-data__subtitle">${data.buyBanksCount}</span></div>
                </td>
                <td>
                    <div>${data.sale}</div>
                    <div><span class="currency-short-data__subtitle">${data.saleBanksCount}</span></div>
                </td>
              </tr>`
  })

  return result
}

export default {
  title: 'Components/Currency short data',
  parameters: {
    notes: `Зависимости: <b>currency-short-data.css; currency-short-data-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrencyShortDataAsset.php</b>`,
  },
  args: {
    title: 'Курсы криптовалют',
    currencies: CURRENCIES,
    headers: ['Валюта','Банк покуп.','Банк прод.']
  }
}

const Template = ({ data, ...args }) => {
  return (`
    <div class="currency-short-data">
        <div class="currency-short-data__title">
            <h2>${args.title}</h2>
        </div>
        <div class="currency-short-data__table">
            <table>
                <thead>
                    <tr>
                        ${renderHeaders(args.headers, 'th')}
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td colspan="3"><a href="#">EUR / RUB</a></td>
                    </tr>
                </tfoot>
                <tbody>
                    ${renderItems(args.currencies,Currency)}
                </tbody>

            </table>
        </div>
    </div>
  `)
}

export const CurrencyShortDataV1 = Template.bind({})
CurrencyShortDataV1.storyName = 'Короткая информация о курсах. Вариант 1'