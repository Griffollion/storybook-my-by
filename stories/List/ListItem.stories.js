
export default {
  title: 'Components/UI/Lists/ListItem',
  parameters: {
    notes: `Зависимости: <b>lists.css;</b> \n
    На проекте расположены в глобальном ассете <b>GlobalStylesAsset.php</b>`,
  },
  args: {
    text: 'Some text',
    modificator: ''
  },
}

const Template = ({ data, ...args }) => {
  return (
    `
    <li ${args.modificator ? `class=${args.modificator}` : '' } >${args.text}</li>
    `
  )
};

export const ListItem = Template.bind({})






