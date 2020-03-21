const { 
  thumbnailImage,
  inviteImage,
  peasantImage,
  regularInviteLink,
  adminInviteLink } = require('../config.json');
// at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#af1313')
	.setTitle('Invite Chief Gray')
	.setURL(regularInviteLink)
	.setDescription(`[Make Chief Gray an Administrator](${adminInviteLink})`)
  .setThumbnail(thumbnailImage)
  .setImage(inviteImage)
	.setTimestamp(new Date().toUTCString())
	.setFooter('Powered by Peasant', peasantImage);

const main = (msgContent) => {
  msgContent.msg.channel.send(exampleEmbed)
}

module.exports.main = main;