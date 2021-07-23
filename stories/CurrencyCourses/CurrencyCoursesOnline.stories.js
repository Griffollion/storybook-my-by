import  '../../src/css/blocks/currencies-courses/currencies-courses.css'
import  '../../src/css/blocks/currencies-courses/currencies-courses.css'
import { Mob } from './CurrencyCoursesOnlineMob.stories'

export default {
  title: 'Blocks/Курсы валют/Курсы валют онлайн',
  parameters: {
    notes: `Зависимости: <b>currencies-courses-online.css; currencies-courses-online-@media.css;</b> \n
    На проекте расположены в ассете <b>CurrenciesCoursesOnlineAsset.php</b>`,
  }
}

const Template = ({

}) => {
  return (
    `
      <table class="currencies-courses currencies-courses--online">
        <thead>
            <tr>
              <th><span class="sort">Банк</span></th>
              <th><span class="sort"><div>Покупает</div>USD</span></th>
              <th><span class="sort"><div>Продает</div> USD</span></th>
              <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="#"><img src="#" alt="#">Nembo (онлайн)</a>
                </td>
                <td>2.613</td>
                <td>2.618</td>
                <td><i class="light-gray ic-arrow_right fs-14"></i></td>
            </tr>
        </tbody>
      </table>
    `
  )
}

export const Desk =  Template.bind({})
Desk.storyName = 'Таблица онлайн курсов. Деск.'


