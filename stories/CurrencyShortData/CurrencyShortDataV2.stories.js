import '../../src/css/components/currency-short-data/currency-short-data.css'
import '../../src/css/components/currency-short-data/currency-short-data-@media.css'
import { renderImg } from '../../utils/helpers'
import  {Currency} from '../Currency.stories'

const IMG_FOLDER_PATH = './src/img/icons-currency/'
const CURRENCIES = [
  {
    name: 'usd',
    buy: '2.5933',
    sale: '2.5933',
    direction: 'up'
  },
  {
    name: 'eur',
    buy: '3.0947',
    sale: '3.0453',
    direction: 'up'
  },
  {
    name: 'rub',
    buy: '3.5453',
    sale: '2.5933',
    direction: 'down'
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
                </td>
                <td>
                    <div>${data.sale}<i class="ml-5 ic-arrow-${data.direction} ${data.direction}"></i></div>
                </td>
              </tr>`
  })

  return result
}

export default {
  title: 'Components/Currency short data',
  parameters: {
    notes: `Зависимости: <b>currency-short-data.css; currency-short-data-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrencyShortData.php</b>`,
  },
  args: {
    title: 'Курсы валют НБ РБ',
    currencies: CURRENCIES,
    headers: ['Валюта','Сегодня','Завтра']
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
                        <td colspan="3"><a href="#">Все курсы НБ РБ<i class="ml-5 fs-12 ic-arrow_right"></i></a></td>
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

export const CurrencyShortDataV2 = Template.bind({})
CurrencyShortDataV2.storyName = 'Короткая информация о курсах. Вариант 2'