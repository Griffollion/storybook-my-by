export default function () {
  function closeTooltip (tgt, storageKey) {
    tgt.closest(tooltipContainer).classList.add('closed')
  }

  function isKeyInStorage (storageKey) {
    if (localStorage.getItem(storageKey)) {
      return true
    }
    else {
      return false
    }
  }

  const tooltipCloseBtn = document.querySelector(
    '[data-page-version-switcher="tooltip-close"]')
  const tooltipContainer = '.page-version-switcher__tooltip'
  const storageKey = 'pageSwitcherTooltip'

  if (isKeyInStorage(storageKey)) {
    closeTooltip(tooltipCloseBtn)
    localStorage.setItem(storageKey, 'closed')
  }

  tooltipCloseBtn.addEventListener('click', function () {
    closeTooltip(this)
    localStorage.setItem(storageKey, 'closed')
  })
}