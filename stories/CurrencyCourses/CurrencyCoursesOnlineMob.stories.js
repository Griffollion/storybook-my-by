import '../../src/css/blocks/currencies-courses/currencies-courses.css'
import '../../src/css/blocks/currencies-courses/currencies-courses-@media.css'
import '../../src/css/blocks/currencies-courses/currencies-courses--online.css'
import '../../src/css/blocks/currencies-courses/currencies-courses--online-@media.css'
import '../../src/css/components/bank-logo/bank-logo.css'
import '../../src/css/components/bank-logo/bank-logo-@media.css'
//Tooltipster
import '../../src/css/libs/tooltipster/tooltipster.bundle.min.css'
import '../../src/css/components/tooltipster-custom/tooltipster-custom.css'
import '../../src/js/libs/tooltipster/tooltipster.bundle.min.js'

const IMG_PATH = '../../src/img/icons-banks/small/'

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

const renderTableHeaders = (items) => {
  let result = ``
  items.forEach(item => {
    result += `<th>
                    ${item.isSort ? `<div class="sort"><div>${item.title} ${item.currency ? `<div>${item.currency}</div></div>` : ''}</div>` : `${item.title}`}
                </th>`
  })

  return result
}

const renderTableData = (items) => {
  let result = ``
  items.forEach(item => {
    result += `
      <tr>
          <td>
              <a href="${item.link}">
                <span class="bank-logo bank-logo--s mr-5">
                    <img src="${IMG_PATH}${item.bankIcon}" alt="${item.bankName}">
                </span>
                ${item.bankTitle}
              </a>
          </td>
          <td>
              ${item.isBestBuyCourse
            ? `<span class="accent tooltip-click" title="Лучший курс">${item.buyRate}</span>`
            : `${item.buyRate}`}
          </td>
          <td>
              ${item.isBestSaleCourse
            ? `<span class="accent tooltip-click" title="Лучший курс">${item.saleRate}</span>`
            : `${item.saleRate}`}
          </td>
          <td>
            <a href="${item.link}">
                <i class="light-gray ic-arrow_right fs-14"></i>
            </a>
          </td>
      </tr>
`
  })

  return result
}

export default {
  title: 'Blocks/Курсы валют/Курсы валют онлайн',
  parameters: {
    notes: `Зависимости: <b>currencies-courses-online.css; currencies-courses-online-@media.css; bank-logo.css; bank-logo-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesCoursesOnlineAsset.php</b>`,
  },
  args: {
    headers: [{title: 'Банк', isSort: true}, {title: 'Покупает', isSort: true, currency: 'USD'}, {title: 'Продает', isSort: true, currency: 'USD'},{title: ''}],
    bodyData: [
      {
        bankIcon: 'ideabank_min.svg',
        bankName: 'Idea',
        bankTitle: 'Nembo (онлайн)',
        link: '#',
        buyRate: '2.613',
        saleRate: '2.618',
        isBestBuyCourse: false,
        isBestSaleCourse: true,

      },
      {
        bankIcon: 'paritetbank_min.svg',
        bankName: 'Paritetbank',
        bankTitle: 'Paritetbank',
        link: '#',
        buyRate: '2.617',
        saleRate: '2.620',
        isBestBuyCourse: true,
        isBestSaleCourse: false,

      },
      {
        bankIcon: 'ideabank_min.svg',
        bankName: 'Idea',
        bankTitle: 'Nembo (онлайн)',
        link: '#',
        buyRate: '2.610',
        saleRate: '2.630',
        isBestBuyCourse: false,
        isBestSaleCourse: false,
      },
    ],
  },
}

const Template = ({ data, ...args }) => {
  $(document).ready(() => {
    initTooltips()
  })
  return (
    `
      <table class="currencies-courses currencies-courses--online">
        <thead>
            <tr>
               ${renderTableHeaders(args.headers)}
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
Mob.storyName = 'Таблица онлайн курсов. Моб.'


