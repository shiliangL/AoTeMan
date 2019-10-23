const globalData = {

  shiliangL:'多应用开发'

}

export function set(key, val) {
  globalData[key] = val
}

export function get(key) {
  return globalData[key]
}
