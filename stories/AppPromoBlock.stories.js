import '../src/css/components/app-promo-block/app-promo-block.css'
import '../src/css/components/app-promo-block/app-promo-block-@media.css'

const IMG_FOLDER_PATH = '/src/img/icons/'
const MARKETS = [
  {
    link: '#',
    img: 'app-app_store.svg',
    alt: 'App store',
  },
  {
    link: '#',
    img: 'app-google_play.svg',
    alt: 'Google play',
  },
  {
    link: '#',
    img: 'app-app_gallery.svg',
    alt: 'App gallery',
  }
]

const renderItems = (arr => {
  let result = ``
  arr.forEach((item) => {
    result += `
      <a href="${item.link}" class="app-promo-block__img">
        <img src="${IMG_FOLDER_PATH}${item.img}" alt="${item.alt}">
      </a>
    `
  })

  return result
})

export default {
  title: 'Информирующие блоки/App promo block',
  parameters: {
    notes: `Зависимости: <b>app-promo-block.css; app-promo-block-@media.css</b> \n
    На проекте расположены в ассете <b>AppPromoBlockAsset.php</b>`,
  },
  args: {
    title: 'Курсы валют и конвертер в нашем мобильном приложении',
    markets: MARKETS
  },
}

const Template = ({ ...args }) => {
  return (
    `<div class="app-promo-block">
        <div class="app-promo-block__title">
            ${args.title}
        </div>
        <div class="app-promo-block__images">
            ${renderItems(args.markets)}
        </div>
    </div>`
  )
}

export const AppPromoBlock = Template.bind({})