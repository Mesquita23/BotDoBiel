const Discord = require('discord.js');
//const ytdl = require('ytdl-core');
const fs = require('fs');
const stream = fs.createReadStream('./Marilene.mp3');

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
 if (message.content === 'help') {

       message.reply('help é teu cu');

       }
 if (message.content === 'path') {

       var absolute_path = __dirname;
       message.reply( absolute_path);
       
       }

       





 

 // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          connection.playStream(stream); // Connection is an instance of VoiceConnection
          message.reply('Aéé rapaziada, cheguei com os refri!');
        })
        .catch(console.log);
    } else {
      message.reply('Ó animal de teta, tu precisa entrar em um canal primeiro!!');
    }
  }

  if (message.content === 'Marilene') {
    //connection.playOpusStream(await ytdl('https://www.youtube.com/watch?v=4b3m5sMXmhI'));
    connection.playStream(stream);
  
   // connection.playArbitraryInput('https://www.youtube.com/watch?v=4b3m5sMXmhI');
  
  //  const dispatcher = connection.playFile('/app/Marilene.mp3');
   
       }


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the bot token
