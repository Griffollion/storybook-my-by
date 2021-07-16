export default {
  title: 'Components/UI/Buttons',
  parameters: {
    notes: `Зависимости: <b>btns.css;</b> \n
    На проекте расположены в глобальном ассете <b>GlobalStylesAsset.php</b>`,
  },
  argTypes: {
    type: {
      options: [
        'btn-default',
        'btn-primary',
        'btn-success',
        'btn-app',
      ],
      control: { type: 'select' },
    },
    size: {
      options: [
        '',
        'btn--full',
        'btn-big',
        'btn--middle',
        'btn-block',
      ],
      control: { type: 'select' },
    },
    status: {
      options: [
        '',
        'disabled',
      ],
      control: { type: 'select' },
    },
    tag: {
      options: [
        'div',
        'span',
        'a',
        'button',
      ],
      control: { type: 'select' },
    },
  },
}

const Template = ({ data, ...argTypes }) => {
  return (
    `<${argTypes.tag} ${argTypes.tag === 'a' ? 'href="#"' : ''} class="btn ${argTypes.type} ${argTypes.size} ${argTypes.status}">${argTypes.content}</${argTypes.tag}>`
  )
};

export const Button = Template.bind({})
Button.args = {
  type: 'btn-default',
  content: 'Button',
}






