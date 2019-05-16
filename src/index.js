import _ from 'lodash'
import './assets/style/index.css'
import cc from './assets/images/cc.jpeg'
// import Print from './print'

if(process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component () {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hola', 'webpack'], '~')
  // Print()
  var myImg = new Image()
  myImg.src = cc
  element.appendChild(myImg)

  return element
}

document.body.appendChild(component())
