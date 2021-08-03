import '../src/css/components/currency/currency.css'
import '../src/css/components/currency/currency-@media.css'
import { renderImg } from '../utils/helpers'
import currencies from '../json/curencies.json'

const IMG_FOLDER_PATH = './src/img/icons-currency/'
const ICONS = currencies.map(el => el.sef_alias)

export default {
  title: 'Components/Currency',
  parameters: {
    notes: `Зависимости: <b>currency.css; currency-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrencyAsset.php</b>`,
  },
  args: {
    size: '',
    sizes: ''
  },
  argTypes: {
    currency: {
      options: ICONS,
      control: { type: 'select' },
      defaultValue : ICONS[0] ,
    },
  },
}

const Template = ({ data, ...args }) => {
  console.log(args)
  return (`
    <a href="#" class="currency ${args.size}">
        <img src="${IMG_FOLDER_PATH+args.currency+'.svg'}" width="${args.sizes || 24}" height="${args.sizes || 24}" alt="символ ${args.currency}" />
        <span>${args.currency}</span>
    </a>
  `)
}

export const Currency = Template.bind({})
Currency.storyName = 'Валюта'

export const CurrencyMedium = Template.bind({})
CurrencyMedium.storyName = 'Валюта. Средний размер'
CurrencyMedium.args = {
  size: 'currency--m',
  sizes: '20'
}