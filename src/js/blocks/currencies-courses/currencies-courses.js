class BranchSearch {
  constructor (selector) {
    this._$main = document.querySelector(selector)
    this._$search = document.querySelector(selector + ' input') || null
    this._addEventListener()
  }

  _eventHandler (e) {
    this._search()
  }

  _addEventListener () {
    this._eventHandler = this._eventHandler.bind(this)
    this._$search.addEventListener('click', this._eventHandler)
    this._$search.addEventListener('keyup', this._eventHandler)
  }

  _compareText (str, reg) {
    return str.search(reg) != -1
  }

  _search () {
    let strForSearch = this._$search.value
    let regex = new RegExp(strForSearch, 'gi')

    const itemsList = this._$main.querySelectorAll(
      '.currencies-courses--branches tbody tr')

    for (let i = 0; i < itemsList.length; i++) {
      if (this._compareText(itemsList[i].querySelector(
        '.currencies-courses__branch-name').innerText, regex)) {
        itemsList[i].classList.remove('hidden')
      }
      else {
        itemsList[i].classList.add('hidden')
      }
    }
  }
}

class CurrencyConverter {
  constructor (
    value1 = 0, value2 = 0, currencyName1 = '', currencyName2 = '', container) {
    this.value1 = value1
    this.value2 = value2
    this.currencyName1 = currencyName1
    this.currencyName2 = currencyName2
    this.insertContainer = container
  }

  _make () {
    const template = document.createElement('div')
    template.className = 'floating-currency-converter'
    template.innerHTML = `
                        <span class="floating-currency-converter__close"></span>
                        <div class="floating-currency-converter__cell">
                            <div class="floating-currency-converter__cell-title">
                                Продаете ${this.currencyName1.toUpperCase()}
                            </div>
                            <input type="tel" value="${this.value1}">
                        </div>
                        <div class="floating-currency-converter__cell">
                            <div class="floating-currency-converter__cell-title">
                                Покупаете ${this.currencyName2.toUpperCase()}
                            </div>
                            <input type="tel" value="${this.value2}">
                        </div>`
    const close = template.querySelector('.floating-currency-converter__close')
    close.onclick = function () {
      template.classList.add('invisible')
    }
    return template
  }

  render () {
    const component = this._make()
    this.insertContainer.prepend(component)
  }
}

function initBranchesSearch () {
  const branches = document.querySelectorAll(
    '.currencies-courses__row-additional')
  branches.forEach(branch => {
    const selector = '.' + branch.className +
      '[data-currencies-courses-bank-id=\'' +
      branch.dataset.currenciesCoursesBankId + '\']'
    new BranchSearch(selector)
  })
}

function toggleBranchesDisplay () {

  function isClickableEl (event) {
    if (event.target.classList.contains('tooltip-click') ||
      event.target.classList.contains('currencies-courses__phone-btn') ||
      event.target.nodeName === 'A') {
      return true
    }

    return false
  }

  $(document).on('click', '.currencies-courses__row-main', function (event) {
    if (!isClickableEl(event)) {
      var target = '.currencies-courses__row-additional' +
        '[data-currencies-courses-bank-id="' +
        $(this).attr('data-currencies-courses-bank-id') + '"]'
      $(target).toggleClass('active')
    }
  })
}

function hideCurrencyConverter () {
  const converter = $('.floating-currency-converter')
  const converterButton = $('.currencies-courses__calc')
  if (!converterButton.is(event.target) &&
    converterButton.has(event.target).length === 0 &&
    !converter.is(event.target) &&
    !converter.is(event.target) && converter.has(event.target).length === 0) {
    converter.addClass('invisible')
  }
}

function hidePhones () {
  const container = $('.currencies-courses__phones-container')
  const btn = $('.currencies-courses__phone-btn')
  if (!btn.is(event.target) &&
    btn.has(event.target).length === 0 &&
    !container.is(event.target) &&
    !container.is(event.target) && container.has(event.target).length === 0) {
    container.removeClass('active')
  }
}

function hideAllConverters () {
  const converters = document.querySelectorAll('.floating-currency-converter')
  converters.forEach(converter => {
    converter.classList.add('invisible')
  })
}

function hideAllPhones () {
  const phones = document.querySelectorAll('.currencies-courses__phones-container')
  phones.forEach(phone => {
    phone.classList.remove('active')
  })
}

function showCurrencyConverter () {
  $(document).
    on('click', '.currencies-courses .currencies-courses__currency-cell',
      function (e) {
        if (e.target.dataset.currenciesCourses != 'calc') {
          return
        }

        const target = e.target
        const container = target.parentNode
        const converter = Array.from(container.childNodes).
          find(item => item.classList.contains('floating-currency-converter'))

        if (!converter) {
          hideAllConverters()
          const converter = new CurrencyConverter(1, 2, 'usd', 'eur', container)
          converter.render()
        }
        else {
          hideAllConverters()
          converter.classList.remove('invisible')
        }
      })
}

function showPhones () {
  const phoneBtn = '[data-currencies-courses="show-phones"]'
  $(document).on('click', phoneBtn, function () {
    hideAllPhones()
    const container = $(this).closest('.currencies-courses__phones').find('.currencies-courses__phones-container')
    container.toggleClass('active')
  })
}

$(document).ready(function () {
  initBranchesSearch()
  showCurrencyConverter()
  toggleBranchesDisplay()
  showPhones()
  $(document).on('click', () => {
    hidePhones ()
    hideCurrencyConverter()
  })
})

