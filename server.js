const { Client } = require('discord.js');
const client = new Client();
const tokens = require('./config.json');
const commands = require('./commands.js');
const plugdj = require('./plug.dj/plug.dj.js');

plugdj.eventListeners(client);

client.on('ready', () => { console.log('ready!') });
client.on('message', msg => {
	if (!msg.content.startsWith(tokens.prefix) || msg.author.bot) return;
	const args = msg.content.slice(tokens.prefix.length).trim().toLowerCase().split(/ +/g)
	const msgContent = {args, msg, client}
	commands.command(msgContent)
});
client.login(tokens.secretToken);
const getClient = () => client;
module.exports.getClient = getClient;