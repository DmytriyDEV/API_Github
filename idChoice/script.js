const bodyColor = document.querySelector('.body-color')
const textColor = document.querySelector('.text-color')
const btnsColor = document.querySelector('.btns-color')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

// const btns = document.querySelectorAll('button')
const btn = document.querySelector('.btn')

const local = JSON.parse(localStorage.getItem('color'))




const settings = local === null ? {} : local;

one.onclick = () => {
  settings['bodyColor'] =  bodyColor.value
  document.body.style.background =  bodyColor.value
  localStorage.setItem('color',JSON.stringify(settings))
}

two.onclick = () => {
  settings['textColor'] = textColor.value
  document.body.style.color =  textColor.value
  localStorage.setItem('color',JSON.stringify(settings))
  
}

three.onclick = () => {
  settings['btnsColor'] = btnsColor.value
  document.styleSheets[0].cssRules[3].style.background =  btnsColor.value
  localStorage.setItem('color',JSON.stringify(settings))
  
}


document.body.style.background = settings.bodyColor
document.body.style.color = settings.textColor
document.styleSheets[0].cssRules[3].style.background  = settings.btnsColor







// const rool = {
//   settings : {
//     theme : {
//       body : {
//         color : 'red'
//       }
//     }
//   }
// }