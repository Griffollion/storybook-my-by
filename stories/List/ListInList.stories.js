const modificators = [
  'list--dotted',
  'list--check',
  'list--num',
  'list--before-orange',
  'list--before-blue',
  'disabled',
  'list--inner',
  'list--aic',
]

export default {
  title: 'Components/UI/Lists/List in List',
  parameters: {
    notes: `Зависимости: <b>lists.css;</b> \n
    На проекте расположены в глобальном ассете <b>GlobalStylesAsset.php</b>`,
  },
  argTypes: {
    type: {
      options: [
        'list--dotted',
        'list--check',
        'list--num',
      ],
      control: { type: 'select' },
    },
    color: {
      options: [
        '',
        'list--before-orange',
        'list--before-blue',
      ],
      control: { type: 'select' },
    },
  },
}

const Template = ({ data, ...argTypes }) => {
  return (
    `
    <ul class="list list--inner ${argTypes.type} ${argTypes.color}">
        <li>${argTypes.content}</li>
        <li>
          <ul class="list ${argTypes.type} ${argTypes.color}">
            <li>${argTypes.content}</li>
            <li>${argTypes.content}</li>
          </ul>
        </li>
    </ul>
    `
  )
}

export const List = Template.bind({})
List.args = {
  type: 'list--dotted',
  content: 'List item',
}






