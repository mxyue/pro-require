const fs = require('fs')
const Module = require('module')
const path = require('path')
const orgRequire = Module.prototype.require
let init = false

module.exports = function (rootPathPrefix, rootPathSuffix = '') {
  if (!rootPathPrefix) {
    throw new Error('please set rootPathPrefix, like @ ')
  }

  if (init) {
    return
  }
  init = true
  const root = path.resolve(__dirname, `../../${rootPathSuffix}`)
  const prefixReg = new RegExp(`^${rootPathPrefix}`, 'i')

  Module.prototype.require = function (fileName) {
    if (rootPathPrefix && fileName.startsWith(`${rootPathPrefix}/`)) {
      let abPath = fileName.replace(prefixReg, root)
      return orgRequire.call(this, abPath)
    } else {
      return orgRequire.call(this, fileName)
    }
  }
}
