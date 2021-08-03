export default function () {
  const root = '[data-sticky-currency-select="root"]'
  const btn = '[data-sticky-currency-select="btn"]'
  const list = '[data-sticky-currency-select="list"]'

  $(document).on('click', btn, function (e) {
    e.preventDefault()
    $(this).toggleClass('toggled')
    var currenciesList = $(this).closest(root).find(list)
    currenciesList.toggleClass('active')
  })

  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
    {threshold: [1]}
  );


  observer.observe(document.querySelector(root))
}