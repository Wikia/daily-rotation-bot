const { RTMClient } = require('@slack/client');
const pick = require('./pick');
const help = require('./help');

const token = process.env.SLACK_TOKEN || '';
const rtm = new RTMClient(token, { logLevel: 'error' });
const commands = [
	pick,
	help
];

console.log('Daily rotation bot activated.');
rtm.start();
console.log('Slack RTM started.');

rtm.on('message', (message) => {
	if (message.text) {
		commands.forEach((command) => {
			if (command.pattern.test(message.text)) {
				command.run(rtm, message);
			}
		});
	}
});
