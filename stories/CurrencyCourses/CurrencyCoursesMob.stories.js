import '../../src/css/blocks/currencies-courses/currencies-courses.css'
import '../../src/css/blocks/currencies-courses/currencies-courses-@media.css'
import '../../src/js/blocks/currencies-courses/currencies-courses.js'
import banksJSON from '../../json/currencyRatesMob.json'

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
  usd_sell: '2.525'
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
  console.log

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
          ${renderCourse(branch, bestCourses, false)}
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
              <div class="fs-14 light-gray"><i class="ic-arrow_down fs-10 mr-5"></i>5 отделений</div>
          </td>
          
          ${renderCourse(item, bestCourses)}

          <td>
              <div class="currencies-courses__phones">
              <i class="ic-phone currencies-courses__phone-btn" data-currencies-courses="show-phones"></i>
              <div class="currencies-courses__phones-container">
                   <a href="tel:+375292202222">+ 375 29 220-22-22</a>
              </div>
            </div>
          </td>
      </tr>
      
      <tr class="currencies-courses__row-additional" data-currencies-courses-bank-id = ${item.id}>
              <td class="currencies-courses__inner-table-container" colspan="4">
                <form class="currencies-courses__search-row" data-currencies-courses="branch-search">
                  <i class="currencies-courses__icon ic-search"></i>
                  <input type="text" placeholder="Адрес или номер отделения">
                </form>
                <table class="currencies-courses currencies-courses--branches">
                <thead>
                    <tr>
                      <th>
                        <div class="sort"><div>Банк</div></div>
                      </th>
                      <th>
                        <div class="sort">
                          <div>
                            Покупает
                            <div>USD</div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div class="sort">
                          <div>
                            Продает
                            <div>USD</div>
                          </div>
                        </div>
                      </th>
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
  title: 'Blocks/Курсы валют/Курсы валют/Мобайл',
  parameters: {
    notes: `Зависимости: <b>currencies-courses.css; currencies-courses-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesCoursesOnlineAsset.php</b>`,
    layout: 'fullscreen',
  },
  args: {
    bodyData: [],
    modificators: ''
  },
}

const Template = ({ data, ...args }) => {
  $(document).ready(() => {
    initTooltips()

  })

  return (
    `
      <table class="currencies-courses currencies-courses--mob ${args.modificators}">
      <thead>
          <tr>
            <th>
              <div class="sort"><div>Банк</div></div>
            </th>
            <th>
              <div class="sort">
                <div>
                  Покупает
                  <div>USD</div>
                </div>
              </div>
            </th>
            <th>
              <div class="sort">
                <div>
                  Продает
                  <div>USD</div>
                </div>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            ${renderTableData(args.bodyData)}
        </tbody>
      </table>
    `
  )
}

export const Mob = Template.bind({})
Mob.storyName = 'Таблица курсов. Моб.'
Mob.args = {
  bodyData: banks,
}
export const MobNegativeMargins = Template.bind({})
MobNegativeMargins.storyName = 'Таблица курсов. Моб. Отрицательные отступы'
MobNegativeMargins.args = {
  bodyData: banks,
  modificators: 'currencies-courses--negative-margins'
}


