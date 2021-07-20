class CurrenciesChart {
  constructor (
    data, target, dateFormat = 'YYYY-MM-DD JJ:NN', minPeriod = 'mm') {
    this.data = data
    this.target = target
    this.chart = null
    this.dateFormat = dateFormat
    this.minPeriod = minPeriod
  }

  makeChart () {
    this.chart = AmCharts.makeChart('chart', {
      'type': 'serial',
      'theme': 'none',
      'marginTop': 5,
      'marginRight': 14,
      'dataProvider': this.data,
      'language': 'ru',
      'valueAxes': [
        {
          'axisAlpha': 0,
          'position': 'left',
        }],
      'graphs': [
        {
          'id': 'g1',
          'balloonText': '[[category]]<br><b><span style=\'font-size:14px;\'>[[value]]</span></b>',
          'bullet': 'round',
          'bulletSize': 8,
          'lineColor': '#14509b',
          'lineThickness': 2,
          'negativeLineColor': '#637bb6',
          'type': 'smoothedLine',
          'valueField': 'value',
        }],
      'chartScrollbar': {
        'graph': 'g1',
        'gridAlpha': 0,
        'color': '#888',
        'scrollbarHeight': 11,
        'dragIconHeight': 30,
        'backgroundAlpha': 1,
        'backgroundColor': '#ededed',
        'selectedBackgroundAlpha': 1,
        'selectedBackgroundColor': '#e1e1e1',
        'graphFillAlpha': 0,
        'autoGridCount': false,
        'selectedGraphFillAlpha': 0,
        'graphLineAlpha': 0.2,
        'graphLineColor': '#c2c2c2',
        'selectedGraphLineColor': '#888',
        'selectedGraphLineAlpha': 1,
        'graphType': 'ohlc',
        'oppositeAxis': false,
        'offset': 30,

      },
      'chartCursor': {
        'categoryBalloonDateFormat': 'YYYY-MM-DD',
        'cursorAlpha': 0,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': false,
        'valueLineAlpha': 0.5,
        'fullWidth': true,
        'categoryBalloonEnabled': false,
      },
      'dataDateFormat': this.dateFormat,
      'categoryField': 'date',
      'categoryAxis': {
        'minPeriod': this.minPeriod,
        'parseDates': true,
        'dashLength': 1,
        'minorGridEnabled': false,
        'minorGridAlpha': 0.1,
      },
    })
  }

  set updateData (value) {
    this.data = value
    this._updateChart()
  }

  _updateChart () {
    this.chart.dataProvider = this.data
    this.chart.validateData()
  }

}

const setActiveCurrenciesChartBtn = (btn) => {
  let buttons = btn.closest('[data-currencies-chart-btn-root]').
    find('[data-currencies-chart-btn]')
  buttons.each(function () {
    $(this).removeClass('active')
  })

  btn.addClass('active')
}
