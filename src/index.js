import _ from 'lodash'
import './assets/style/index.css'
import cc from './assets/images/cc.jpeg'
import printMe from './print'

function component () {
  let element = document.createElement('div')
  printMe()
  element.innerHTML = _.join(['Hola', 'webpack'], '~')

  var myImg = new Image()
  myImg.src = cc
  element.appendChild(myImg)

  return element
}

document.body.appendChild(component())
