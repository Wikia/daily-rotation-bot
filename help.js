module.exports = {
	pattern: /^daily help$/i,
	run(rtm, message) {
		rtm.sendMessage(`https://github.com/Wikia/daily-rotation-bot`, message.channel);
	},
};
