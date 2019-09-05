const { RichEmbed } = require('discord.js');
const server = require('../../server.js');
const profile = require('./util/profile.js');
const tokens = require('../../config.json');

const nowPlaying = (data) => {
    let discordChannel = server
        .getClient()
        .channels
        .get(tokens.discordChannelId)
        if (data.currentDJ) {
            const exampleEmbed = new RichEmbed()
            .setColor('#0099ff')
            .setTitle(tokens.plugDjChannelUrl)
            .setURL(`https://${tokens.plugDjChannelUrl}`) //eg: plug.dj/pimp-squad
            .setAuthor(
                data.currentDJ.username, 
                profile.getBadge(),
                profile.getProfile(data.currentDJ.username))
            .setDescription('Now Playing:')
            .setThumbnail(profile.getAvatar(data.currentDJ.avatarID))
            .addField(data.media.title, data.media.author)
            .addField("Next DJ:", data.djs[1] ? data.djs[1].username : data.currentDJ.username)
            .setImage(data.media.image)
            .setTimestamp()
            .setFooter('Powered By Peasant', profile.getPeasant());
        discordChannel.send(exampleEmbed);
        }
}
module.exports = { nowPlaying };