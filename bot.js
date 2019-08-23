const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
 
  if (message.content === 'Paulo') {

       message.reply('Chupador do CR7');

       }
  if (message.content === 'Thomaz') {

       message.reply('Ola Marilene, a noite tá inha, vinho e muito sexo!');

       }
  if (message.content === 'Lucas') {

       message.reply('Lendas 2 fio, respeita');

       }
 if (message.content === 'Wagner') {

       message.reply('Puck');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the bot token
