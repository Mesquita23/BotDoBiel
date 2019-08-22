const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login('NjE0MTc0MTM0MzQ3MjM1MzI4.XV7vWA.7wvw1y0xCcILFQunsuN6zyT6YMk');//BOT_TOKEN is the bot token
