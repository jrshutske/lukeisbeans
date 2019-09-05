const { RichEmbed } = require('discord.js');
const server = require('../../server.js');
const profile = require('./util/profile.js');
const tokens = require('../../config.json');

const persistChat = (data) => {
    const discordChannel = server
        .getClient()
        .channels
        .get(tokens.discordChannelId);
    const exampleEmbed = new RichEmbed()
		.setColor('#ff0000')
		.setAuthor(
			data.from.username,
            profile.getBadge(),
            profile.getProfile(data.from.username))
		.setDescription(data.message)
		.setThumbnail(profile.getAvatar(data.from.avatarID))
        .setTimestamp();   
    discordChannel.send(exampleEmbed);
}
module.exports.persistChat = persistChat;