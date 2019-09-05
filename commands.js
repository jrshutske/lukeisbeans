const say = require('./methods/say.js')
const lukeisbeans = require('./methods/lukeisbeans.js')

const command = (msgContent) => {
  switch(msgContent.ARGS[0]) {
    case "lukeisbeans"   : return lukeisbeans.imageCreep(msgContent)
    case "say"           : return say.main(msgContent.msg)
    default              : return null
  }
}

module.exports.command = command