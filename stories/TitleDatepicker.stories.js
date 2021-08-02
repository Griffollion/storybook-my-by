import '../src/css/components/title-datepicker/title-datepicker.css'
import '../src/css/components/title-datepicker/title-datepicker-@media.css'

export default {
  title: 'Components/Title datepicker',
  parameters: {
    notes: `Зависимости: <b>title-datepicker.css; title-datepicker-@media.css;</b> \n
    На проекте расположены в ассете <b>TitleDatepickerAsset.php</b>`,
  },
  args: {

  },
}

const Template = ({}) => {
  return (
    `
  <h1>
    Заголовок
    <span class="title-datepicker">
      <span class="title-datepicker__text">на сегодня</span>
      <input type="text" class="form-control" value="" readonly="" onfocus="blur()">
      <span class="title-datepicker__icon">&nbsp;<i class="ic-calendar-2"></i></span>
    </span>
  </h1>
`
  )
}

export const CityPicker = Template.bind({})