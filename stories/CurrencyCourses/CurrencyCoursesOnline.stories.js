import '../../src/css/blocks/currencies-courses-online/currencies-courses-online.css'
import '../../src/css/blocks/currencies-courses-online/currencies-courses-online-@media.css'

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

const renderCur = (obj) => {
  let items = ''

  obj.forEach(data => {
    items += `
            <td>
              ${data.isBestBuyCourse
      ? `<span class="accent orange tooltip-click" title="Лучший курс">${data.buyRate}</span>`
      : `${data.buyRate}`}
          </td>
          <td>
              ${data.isBestSaleCourse
      ? `<span class="accent orange tooltip-click" title="Лучший курс">${data.saleRate}</span>`
      : `${data.saleRate}`}
          </td>
  
  `


  })

  return items

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
          ${renderCur(item.rates)}
          <td><a href="#">Подробнее <i class="ic-arrow_right fs-12"></i></a></td>
      </tr>
`
  })

  return result
}

export default {
  title: 'Blocks/Курсы валют/Курсы валют онлайн/Десктоп',
  parameters: {
    notes: `Зависимости: <b>currencies-courses-online.css; currencies-courses-online-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesCoursesOnlineAsset.php</b>`,
  },
  args: {
    bodyData: [
      {
        bankIcon: 'ideabank_min.svg',
        bankName: 'Idea',
        bankTitle: 'Nembo (онлайн)',
        link: '#',
        rates: [
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: true,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: true,
          },
        ],
      },
      {
        bankIcon: 'paritetbank_min.svg',
        bankName: 'Paritetbank',
        bankTitle: 'Paritetbank',
        link: '#',
        rates: [
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
        ],
      },
      {
        bankIcon: 'ideabank_min.svg',
        bankName: 'Idea',
        bankTitle: 'Nembo (онлайн)',
        link: '#',
        rates: [
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
          {
            buyRate: '2.613',
            saleRate: '2.618',
            isBestBuyCourse: false,
            isBestSaleCourse: false,
          },
        ],
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
      <table class="currencies-courses-online">
        <thead>
            <tr>
              <th></th>
              <th colspan="2"><span class="accent main-black fs-16">USD</span></th>
              <th colspan="2"><span class="accent main-black fs-16">EUR</span></th>
              <th colspan="2"><span class="accent main-black fs-16">RUB 100</span></th>
              <th colspan="2"><span class="accent main-black fs-16">EUR / USD</span></th>
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
              <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                ${renderTableData(args.bodyData)}
            </tr>
        </tbody>
      </table>
    `
  )
}

export const Desk = Template.bind({})
Desk.storyName = 'Таблица онлайн курсов. Деск.'


