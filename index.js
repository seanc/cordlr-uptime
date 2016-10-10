const pixie = require('pixie');
const Duration = require('duration');

function uptime(bot, config) {
  config = config[uptime.name] || {};
  const format = config.format || 'Uptime: {{hour}} hours, {{minute}} minutes, and {{second}} seconds';
  const start = bot.readyTime;
  return function run(message) {
    const now = new Date();
    const duration = new Duration(start, now);
    message.reply(pixie.render(format, duration));
  }
}

uptime.command = 'uptime';
uptime.usage = 'uptime';

module.exports = uptime;
