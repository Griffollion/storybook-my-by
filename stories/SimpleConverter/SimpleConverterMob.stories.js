import '../../src/css/blocks/simple-converter/simple-converter.css'
import '../../src/css/blocks/simple-converter/simple-converter-@media.css'
import '../../src/css/components/minimal-tabs/minimal-tabs.css'
import '../../src/css/components/minimal-tabs/minimal-tabs-@media.css'
import converterScripts from '../../src/js/blocks/simple-converter/simple-converter.js'

export default {
  title: 'Blocks/Упрощенный конвертер',
  parameters: {
    notes: `Зависимости: <b>simple-converter.css; simple-converter-@media.css; simple-converter.js; minimal-tabs.css; minimal-tabs-@media.css</b> \n
    На проекте расположены в глобальном ассете <b>SimpleConverterAsset.php</b>`,
  },
  args: {
    id: 'converter'
  }
}

const Template = ({data,...args}) => {
  $(document).ready(converterScripts)
  return (`
    <div class="btn btn-default btn--full" data-simple-converter="show-btn" data-simple-converter-target="#${args.id}">Конвертер валют
    </div>
    <div class="simple-converter simple-converter--modal" id="${args.id}" data-simple-converter="root">
    <div class="simple-converter__container">
        <div class="simple-converter__head">
            <h3>Конвертер валют</h3>
        </div>
        <div class="simple-converter__body">
            <ul class="list-reset minimal-tabs minimal-tabs--normalcase minimal-tabs--links-no-paddings minimal-tabs--fs-14 bb-1"
                role="tablist">
                <li class="minimal-tabs__item active" role="presentation">
                <span class="minimal-tabs__btn" data-toggle="tab" aria-controls="tab-1" href="#tab-1">
                    НБРБ
                </span>
                </li>
            </ul>
            <span class="simple-converter__close" data-simple-converter="close-btn">
            <i class="ic-close"></i>
        </span>
            <div class="simple-converter__fields">
                <div class="tab-content no-padding">
                    <div id="tab-1" class="tab-pane fade active in" role="tabpanel">
                        <div class="simple-converter__currencies-list">
                            <div class="simple-converter__currency">
                                <div class="simple-converter__currency-name">BYN</div>
                                <div class="simple-converter__currency-control">
                                    <input>
                                </div>
                            </div>
                            <div class="simple-converter__currency">
                                <div class="simple-converter__currency-name"><a href="#">USD</a></div>
                                <div class="simple-converter__currency-control">
                                    <input>
                                </div>
                            </div>
                            <div class="simple-converter__currency">
                                <div class="simple-converter__currency-name"><a href="#">EUR</a></div>
                                <div class="simple-converter__currency-control">
                                    <input>
                                </div>
                            </div>
                            <div class="simple-converter__currency">
                                <div class="simple-converter__currency-name"><a href="#">RUB</a></div>
                                <div class="simple-converter__currency-control">
                                    <input>
                                </div>
                            </div>
                            <div class="simple-converter__currency">
                                <div class="simple-converter__currency-name"></div>
                                <div class="simple-converter__currency-control">
                                    <a href="#" class="btn btn--full btn-primary">
                                        Добавить валюту +
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  `)
}

export const SimpleConverterMob = Template.bind({})
SimpleConverterMob.storyName = 'Упрощенный конвертер. Моб.'