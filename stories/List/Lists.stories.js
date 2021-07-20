import { ListItem } from './ListItem.stories'
import { renderElements } from '../../utils/helpers'

export default {
  title: 'Components/UI/Lists/List',
  parameters: {
    notes: `Зависимости: <b>lists.css;</b> \n
    На проекте расположены в глобальном ассете <b>GlobalStylesAsset.php</b>`,
  },
  args: {
    LIST_ITEM: [
      {
        text: 'List item',
        modificator: ''
      },
      {
        text: 'List item',
        modificator: ''
      },
      {
        text: 'List item',
        modificator: ''
      },
    ]
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

const Template = ({ data, ...args }) => {
  return (
    `
    <ul class="list ${args.type} ${args.color}">
        ${renderElements(args.LIST_ITEM, ListItem)}
    </ul>
    `
  )
}

export const List = Template.bind({})
List.args = {
  type: 'list--dotted',
}






