export function addClass(el, className) { // dom添加属性
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) { // dom是否含有某个属性
  let reg = new RegExp('(^|\\s)' + className + '($|\\s)')
  return reg.test(el.className)
}

export function getData(el, name, val) { // set 给dom的'data-'属性添加值  get 获取dom的属性值
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'mozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let k in transformNames) {
    if (elementStyle[transformNames[k]] !== undefined) {
      return k
    }
  }
  return false
})()
// console.log(vendor)
export function prefixStyle(style) { // css前缀添加
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}