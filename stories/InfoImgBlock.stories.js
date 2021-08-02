import '../src/css/components/info-img-block/info-img-block.css'
import '../src/css/components/info-img-block/info-img-block-@media.css'
import icons from "../json/svgIconNames.json";
import { renderImg } from '../utils/helpers'

const IMG_FOLDER_PATH = '/src/img/icons/'
const ICONS = icons.files.map(el => el.fileName)

export default {
  title: 'Информирующие блоки/Info img block',
  parameters: {
    notes: `Зависимости: <b>info-img-block.css; info-img-block-@media.css;</b> \n
    На проекте расположены в ассете <b>InfoImgBlock.php</b>`,
  },
  args: {
    title: 'Заявка на кредит',
    subtitle: 'Отправьте быструю заявку во все банки',
    link: '#',
  },
  argTypes: {
    image: {
      options: ICONS,
      control: { type: 'select' },
      defaultValue : ICONS[5] ,
    },
  },
}

const Template = ({ data, ...args }) => {
  return (`
    <div class="info-img-block info-img-block--v2 info-img-block--no-border info-img-block--bg-blue">
    <div class="info-img-block__wrapper">
        <div class="info-img-block__img">
            ${renderImg(IMG_FOLDER_PATH+args.image)}
        </div>
        <div class="info-img-block__title">
            ${args.title}
        </div>
        <div class="info-img-block__text">
            ${args.subtitle}
        </div>
        <div class="info-img-block__btn">
            <div class="btn btn-primary" data-toggle="modal" data-target="#request-mass-modal">Отправить заявку
            </div>
        </div>
    </div>
</div>
  `)
}

export const InfoImgBlock = Template.bind({})
InfoImgBlock.storyName = 'Блок информирования с картинкой'