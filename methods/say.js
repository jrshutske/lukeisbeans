const main = (msg) => {
  msg.channel.send(msg.content.substr(msg.content.indexOf(" ") + 1));
}
module.exports.main = main;
