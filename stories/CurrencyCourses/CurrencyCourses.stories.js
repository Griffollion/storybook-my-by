import '../../src/css/blocks/currencies-courses/currencies-courses.css'
import '../../src/css/blocks/currencies-courses/currencies-courses-@media.css'
import '../../src/js/blocks/currencies-courses/currencies-courses.js'
import banksJSON from '../../json/currencyRates.json'

//Tooltipster
import '../../src/css/libs/tooltipster/tooltipster.bundle.min.css'
import '../../src/css/components/tooltipster-custom/tooltipster-custom.css'
import '../../src/js/libs/tooltipster/tooltipster.bundle.min.js'

const IMG_PATH = '../../src/img/icons-banks/small/'
const banks = banksJSON.banks

const initTooltips = () => {
  $(document).on('click', '.tooltipster-close', function () {
    $('.tooltip-click').tooltipster('close')
  })

  if ($('.tooltip-click').length) {
    $('.tooltip-click').tooltipster({
      trigger: 'click',
      animation: 'grow',
      contentAsHTML: true,
      repositionOnScroll: true,
      interactive: true,
      maxWidth: 240,
    })
  }
}

const bestCourses = {
  usd_buy: '2.516',
  usd_sell: '2.519',
  eur_buy: '2.966',
  eur_sell: '2.965',
  rub_buy: 3.39 / 100,
  rub_sell: 3.41 / 100,
  eurusd_buy: '1.178',
  eurusd_sell: '1.18',
}

const renderPhones = (phones) => {
  return `<div class="currencies-courses__phones">
            <i class="ic-phone currencies-courses__phone-btn" data-currencies-courses="show-phones"></i>
            <div class="currencies-courses__phones-container">
                <a href="tel:+375292202222">+ 375 29 220-22-22</a>
            </div>
        </div>`
}

const renderCourse = (bank, bestCourse, withCalculator = false) => {
  let result = ''
  const keys = Object.keys(bestCourse)

  keys.forEach(key => {
    let calcIcon = ''
    if(!isNaN(bank[key])) {
      calcIcon = '<div class="currencies-courses__calc-container"><i class="ic-calc currencies-courses__calc" data-currencies-courses="calc"></i></div>'
    }

    if (((bank[key] != bestCourse[key]) && bank.isOldArray[key]) ||
      ((bank[key] == bestCourse[key]) && bank.isOldArray[key])) {
      result += `<td class="currencies-courses__currency-cell">
                    <span class="depricated">${bank[key]}</span>
                    ${withCalculator ? calcIcon : ''}
                 </td>`
    }
    else if ((bank[key] == bestCourse[key]) && !bank.isOldArray[key]) {
      result += `<td class="currencies-courses__currency-cell">
                    <span class="orange accent tooltip-click" title="Лучший курс">${bank[key]}</span>
                    ${withCalculator ? calcIcon : ''}
                 </td>`
    }
    else {
      result += `<td class="currencies-courses__currency-cell">
                    ${bank[key]}
                    ${withCalculator ? calcIcon : ''}
                </td>`
    }
  })

  return result
}

const renderAdditionalTableData = (item) => {
  let result = ``
  item.fills.forEach(branch => {
    result += `
      <tr>
          <td>
          <a class="currencies-courses__branch-name" href="#">${branch.adress}</a>
            ${!branch.old ? `<div class="light-gray fs-14"><i class="ic-update-time mr-5"></i>13:25</div>` : `<div class="light-gray fs-14"> <i class="ic-warning mr-5"></i> Устаревший курс на 21.03</div>`}
          </td>
          ${renderCourse(branch, bestCourses, true)}
          <td>${renderPhones(branch.phone)}</td>
      </tr>
    `
  })
  return result
}

const renderTableData = (items) => {
  let result = ``
  items.forEach(item => {
    result += `
          <tr class="currencies-courses__row-main" data-currencies-courses-bank-id = ${item.id}>
          <td>
              <a href="bank/${item.sef_alias}">
                <span class="bank-logo bank-logo--s mr-5">
                    <img src="${IMG_PATH}${item.sef_alias}.svg" alt="${item.sef_alias}">
                </span>
                ${item.name_not_link}
              </a>
          </td>
          
          ${renderCourse(item, bestCourses)}

          <td>
              <div class="currencies-courses__phones">
              <i class="ic-phone currencies-courses__phone-btn" data-currencies-courses="show-phones"></i>
              <div class="currencies-courses__phones-container">
                  <a href="+375292202222">+ 375 29 220-22-22</a>
              </div>
            </div>
          </td>
      </tr>
      
      <tr class="currencies-courses__row-additional" data-currencies-courses-bank-id = ${item.id}>
              <td class="currencies-courses__inner-table-container" colspan="10">
                <form class="currencies-courses__search-row" data-currencies-courses="branch-search">
                  <i class="currencies-courses__icon ic-search"></i>
                  <input type="text" placeholder="Адрес или номер отделения">
                </form>
                <table class="currencies-courses currencies-courses--branches">
                  <thead>
                      <tr>
                        <th></th>
                        <th colspan="2"><span class="accent main-black fs-16">USD</span></th>
                        <th colspan="2"><span class="accent main-black fs-16">EUR</span></th>
                        <th colspan="2"><span class="accent main-black fs-16">RUB 100</span></th>
                        <th colspan="2"><span class="accent main-black fs-16">EUR / USD</span></th>
                        <th>Телефоны</th>
                      </tr>
                      <tr>
                        <th><span class="sort">Банк</span></th>
                        <th><span class="sort">Покупает</span></th>
                        <th><span class="sort">Продает</span></th>
                        <th><span class="sort">Покупает</span></th>
                        <th><span class="sort">Продает</span></th>
                        <th><span class="sort">Покупает</span></th>
                        <th><span class="sort">Продает</span></th>
                        <th><span class="sort">Покупает</span></th>
                        <th><span class="sort">Продает</span></th>
                        <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      ${renderAdditionalTableData(item)}
                  </tbody>
                </table>
              </td>
          </tr>
    `
  })
  return result
}


export default {
  title: 'Blocks/Курсы валют/Курсы валют/Десктоп',
  parameters: {
    notes: `Зависимости: <b>currencies-courses.css; currencies-courses-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesCoursesOnlineAsset.php</b>`,
  },
  args: {
    bodyData: [],
    modificator: ''
  },
}

const Template = ({ data, ...args }) => {
  $(document).ready(() => {
    initTooltips()
  })

  return (
    `
      <table class="currencies-courses ${args.modificator}">
        <thead>
            <tr>
              <th></th>
              <th colspan="2"><a href="#" class="accent fs-16">USD</a></th>
              <th colspan="2"><a href="#" class="accent fs-16">EUR</a></th>
              <th colspan="2"><a href="#" class="accent fs-16">RUB 100</a></th>
              <th colspan="2"><a href="#" class="accent fs-16">EUR / USD</a></th>
              <th></th>
            </tr>
            <tr>
              <th><span class="sort">Банк</span></th>
              <th><span class="sort">Покупает</span></th>
              <th><span class="sort">Продает</span></th>
              <th><span class="sort">Покупает</span></th>
              <th><span class="sort">Продает</span></th>
              <th><span class="sort">Покупает</span></th>
              <th><span class="sort">Продает</span></th>
              <th><span class="sort">Покупает</span></th>
              <th><span class="sort">Продает</span></th>
              <th>Телефоны</th>
            </tr>
        </thead>
        <tbody>
            ${renderTableData(args.bodyData)}
        </tbody>
      </table>
    `
  )
}

export const Desk = Template.bind({})
Desk.storyName = 'Таблица курсов. Деск.'
Desk.args = {
  bodyData: banks,
}

export const DeskBordered = Template.bind({})
DeskBordered.storyName = 'Таблица курсов. Деск. С рамкой'
DeskBordered.args = {
  bodyData: banks,
  modificator: 'currencies-courses--bordered'
}


