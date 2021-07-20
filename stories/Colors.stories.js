import colors from '../json/colors.json'
import backgrounds from '../json/backgrounds.json'
import '../src/storybook/css/colors.css'

export default {
  title: 'Colors/Colors',
  parameters: {
    notes: `Зависимости: <b>global.css;</b> \n
    На проекте расположены в глобальном ассете <b>GlobalStylesAsset.php</b>`,
  },
}

function selectInputContent (els) {
  els.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.nodeName.toLowerCase() == 'input') {
        e.target.select()
      }
    })
  })
}

function generateColors (arr) {
  let colors = ''
  arr.forEach(el => {
    let color = `
    <div class="color">
        <div class="color__title">${el.name}</div>
        <div class="color__body" style="background-color: ${el.code}">
          <div class="color__code">
            <input type="text" value="${el.code}"/>
          </div>
        </div>

    </div>
    `
    colors += color
  })

  return colors
}

const Template = ({}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.color')
    selectInputContent(codes)
  })
  return (
    `
      <div class="colors-header">Цвета текста</div>
      <div class="colors-container"> 
        ${generateColors(colors)}
      </div>
      
      <div class="colors-header">Цвета фона</div>
      <div class="colors-container"> 
        ${generateColors(backgrounds)}
      </div>
    `
  )
}

export const Colors = Template.bind({})






