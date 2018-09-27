const randomNumber = require('random-number-csprng');
const corePlatform = require('./teams/core-platform');

function getTeamFromChannel(channel) {
	// TODO improve if other teams want to use this bot
	return corePlatform;
}

function getWinner(candidates) {
	return randomNumber(0, candidates.length - 1)
		.then((index) => {
			return candidates[index];
		});
}

module.exports = {
	pattern: /^daily pick$/i,
	run(rtm, message) {
		const team = getTeamFromChannel(message.channel);

		getWinner(team.candidates)
			.then((winner) => {
				// TODO use team.channel if other team is added
				rtm.sendMessage(`Today's daily will be facilitated by ${winner}`, message.channel);
			});
	},
};
