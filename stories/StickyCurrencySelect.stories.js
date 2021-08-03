import '../src/css/blocks/sticky-currency-select/sticky-currency-select.css'
import '../src/css/blocks/sticky-currency-select/sticky-currency-select-@media.css'
import '../src/css/components/checkbox-custom/checkbox-custom.css'
import '../src/css/components/checkbox-custom/checkbox-custom-@media.css'
import stickyCurrencySelectScripts from  '../src/js/blocks/sticky-currency-select/sticky-currency-select.js'
import {Currency} from './Currency.stories'

const CURRENCY_CONFIG = {
  size: 'currency--m',
  currency: 'usd',
  sizes: '20'
}

const IMG_FOLDER_PATH = './src/img/icons-currency/'

const ITEMS = [
  {
    currency: 'usd',
    abbr: 'usd',
    text: 'доллар США'
  },
  {
    currency: 'byn',
    abbr: 'byn',
    text: 'белорусский рубль'
  },
  {
    currency: 'eur',
    abbr: 'eur',
    text: 'евро'
  },
  {
    currency: 'rub',
    abbr: 'rub',
    text: 'российский рубль'
  },
  {
    currency: 'pln',
    abbr: 'pln',
    text: 'польский злотый'
  },
  {
    currency: 'uah',
    abbr: 'uah',
    text: 'украинская гривна'
  },
  {
    currency: 'usd',
    abbr: 'usd',
    text: 'доллар США'
  },
  {
    currency: 'byn',
    abbr: 'byn',
    text: 'белорусский рубль'
  },
  {
    currency: 'eur',
    abbr: 'eur',
    text: 'евро'
  },
  {
    currency: 'rub',
    abbr: 'rub',
    text: 'российский рубль'
  },
  {
    currency: 'pln',
    abbr: 'pln',
    text: 'польский злотый'
  },
  {
    currency: 'uah',
    abbr: 'uah',
    text: 'украинская гривна'
  }
]

const renderItems = (items) => {
  let result = ''
  items.forEach(item => {
    result += `
    <a href="#" class="sticky-currency-select__currencies-list-item">
        <div class="sticky-currency-select__currencies-list-item-img">
            <img src="${IMG_FOLDER_PATH}${item.currency}.svg" alt="${item.abbr}">
        </div>
        <div class="sticky-currency-select__currencies-list-item-abbr">
             ${item.abbr}
        </div>
        <div class="sticky-currency-select__currencies-list-item-text">
            ${item.text}
        </div>
    </a>
    `
  })
  return result
}

export default {
  title: 'Components/Sticky currency select',
  parameters: {
    notes: `Зависимости: <b>sticky-currency-select.css; sticky-currency-select-@media.css; sticky-currency-select.js</b> \n
    На проекте расположены в ассете <b>StickyCurrencySelectAsset.php</b>`,
  }
}

const Template = ({}) => {
  $(document).ready(stickyCurrencySelectScripts)
  return(
    `
    <div class="sticky-currency-select" data-sticky-currency-select="root">
        <div class="sticky-currency-select__checkbox">
          <div class="checkbox-custom-container">
            <input type="checkbox" id="worksNow" class="checkbox-custom" name="worksNow" value="1">
            <label for="worksNow">Работают сейчас</label>
          </div>
        </div>
        <div class="sticky-currency-select__currency" data-sticky-currency-select="btn">
            ${Currency(CURRENCY_CONFIG)}
        </div>
        <div class="sticky-currency-select__currencies-list" data-sticky-currency-select="list">
            ${renderItems(ITEMS)}
        </div>
    </div>
    `
  )
}

export const StickyCurrencySelect = Template.bind({})