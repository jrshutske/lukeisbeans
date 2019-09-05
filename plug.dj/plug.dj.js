const PlugAPI = require('plugapi');
const chat = require('./methods/chat.js');
const currentSong = require('./methods/currentSong.js');
const tokens = require('../config.json');

const eventListeners = (client) => {
	const reconnect = () => { bot.connect(ROOM); };
	const bot = new PlugAPI({
		email: tokens.plugDjEmail,
		password: tokens.plugDjPassword
	});

	bot.connect('pimp-squad');
	bot.on(PlugAPI.events.ROOM_JOIN, (room) => {
		console.log(`Joined ${room}`);
	});

	bot.on(PlugAPI.events.CHAT, (data) => {
		chat.persistChat(data)
		if (data.from.username != "BotBeans") { 
			bot.sendChat('Join us on Discord! https://discord.gg/zEMkFnN')
		}	
	});
	bot.on(PlugAPI.events.ADVANCE,(data)=>currentSong.nowPlaying(data));
	bot.on('close', reconnect);
	bot.on('error', reconnect);
}

module.exports.eventListeners = eventListeners;