const { 
  beansImage,
  peasantImage,
  regularInviteLink,
  adminInviteLink } = require('../config.json');
// at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#af1313')
	.setTitle('Invite Beans')
	.setURL(regularInviteLink)
	.setAuthor('lukeisbeans')
	.setDescription(`[Make Beans an Administrator](${adminInviteLink})`)
  .setThumbnail(beansImage)
  .setImage("https://media2.giphy.com/media/NrjmOUb2h3uta/source.gif")
	.setTimestamp(new Date().toUTCString())
	.setFooter('Powered by Peasant', peasantImage);

const main = (msgContent) => {
  msgContent.msg.channel.send(exampleEmbed)
}
module.exports.main = main;