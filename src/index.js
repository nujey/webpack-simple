import _ from 'lodash'
import './assets/style/index.css'

function component () {
  let element = document.createElement('div')

  element.innerHTML = _.join(['Hola', 'webpack'], '~')

  return element
}

document.body.appendChild(component())
