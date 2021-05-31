export class Modificators {
  constructor (label, values, displayType, defaultValue, groupId) {
    this.label = label
    this.values = values
    this.displayType = displayType
    this.defaultValue = defaultValue
    this.groupId = groupId
  }

  get params () {
    return this.initParams
  }

  initParams () {
    return [
      this.label,
      this.values,
      this.defaultValue,
      this.displayType,
      this.groupId]
  }
}

export const expandOptions = (obj) => {
  const options = []
  for (const key in obj) {
    options.push(obj[key])
  }

  return options
}

//Убирает запятые, которые генерятся при мультиселекте в аддоне optionKnobs
export function prepareParams (arr) {
  return arr.toString().replace(/\,/gm, ' ')
}

//рендер иконки
export const renderIcon = (iconClass, modificator = '', fontSize = '') => {
  return `<i class="${iconClass} ${modificator}  ${fontSize}" ></i>`
}

//рендер Картинки
export const renderImg = (source, altText) => {
  return `<img src="${source}" alt="${altText}" />`
}

//Получить список всех иконок
export const getIconsList = (icons) => {
  var els = []
  for (let i = 0; i < icons.length; i++) {
    els.push(icons[i].iconName.replace(/\:/gi, ''))
  }

  return els
}

//Получить список всех модификаторов (шрифтов или отступов)
//В качестве модификатора передается массив модификаторов из соответствующего
// JSON файла. (JSON файлы лежат в корне проекта, в одноименной папке)
export const getModificatorsList = (
  modificator, modificatorName = 'modificatorName') => {
  var els = []

  for (let i = 0; i < modificator.length; i++) {
    els.push(modificator[i][modificatorName])
  }

  return els
}

//Рендер описания к модификатору компонента
export const renderDescription = (description) => {
  return {
    docs: {
      description: {
        story: description,
      },
    },
  }
}

//Генерация однотипных элементов без параметров
export const generateStaticItems = (template, amount) => {
  let str = ''

  for (let i = 0; i < amount; i++) {
    str += `${template}`
  }

  return str
}
  