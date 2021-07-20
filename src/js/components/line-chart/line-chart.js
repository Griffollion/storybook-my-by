class LineChart {
  constructor (root, values, currency) {
    this.values = values
    this.root = root
    this.currency = currency
  }

  set updateValues (newValues) {
    if (newValues.length > 0) {
      if (!this.compare(this.values, newValues)) {
        this.values = newValues
        this.redrawLines()
      }
    }
    else {
      console.log('Передайте хотя бы одно значение')
    }
  }

  getTotalRatio () {
    let total = 0
    this.values.forEach((value) => {
      total += parseFloat(value)
    })

    return total
  }

  getRatio () {
    const total = this.getTotalRatio()
    const ratios = []
    this.values.forEach((value) => {
      ratios.push(((value / total) * 100))
    })
    return ratios
  }

  generateLines () {
    let lines = ''
    const ratios = this.getRatio()
    const currency = this.currency
    this.values.forEach((value, index) => {
      lines += `<div class="line-chart__block" style="width:${ratios[index]}%"><div class="line-chart__tooltip">${value} ${currency}</div></div>`
    })

    return lines
  }

  compare (a1, a2) {
    return a1.length == a2.length && a1.every((v, i) => v === a2[i])
  }

  redrawLines () {
    let lines = this.root.children
    const ratios = this.getRatio()
    this.values.forEach((value, index) => {
      let line = lines[index]
      let tooltip = lines[index].children
      line.style.width = ratios[index] + '%'
    tooltip[0].innerText = divided(value) + ' ' + this.currency
    })
  }

  init () {
    let items = this.generateLines()
    return this.root.innerHTML = items
  }
}