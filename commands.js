const say = require('./methods/say.js')
const lukeisbeans = require('./methods/lukeisbeans.js')
const mapleCharacter = require('./methods/mapleCharacter.js')
const hpWashing = require('./methods/hpWashing/hpWashing.js')

const command = (msgContent) => {
  switch(msgContent.args[0]) {
    case "lukeisbeans"   : return lukeisbeans.imageCreep(msgContent)
    case "say"           : return say.main(msgContent.msg)
    case "maple"         : return mapleCharacter.main(msgContent)
    case "washes"        : return hpWashing.main(msgContent)
    default              : return null
  }
}

module.exports.command = command