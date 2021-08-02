import '../src/css/components/city-picker/city-picker.css'
import '../src/css/components/city-picker/city-picker-@media.css'

export default {
  title: 'Components/City picker',
  parameters: {
    notes: `Зависимости: <b>city-picker.css; city-picker-@media.css;</b> \n
    На проекте расположены в ассете <b>CityPickerAsset.php</b>`,
  },
  args: {

  },
}

const Template = ({}) => {
  return (
    `<div class="city-picker">
      <i class="ic-map-mrker city-picker__icon"></i>
      <span class="city-picker__text">Минск</span>
    </div>`
  )
}

export const CityPicker = Template.bind({})