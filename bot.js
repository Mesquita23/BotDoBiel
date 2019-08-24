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
 if (message.content === 'help') {

       message.reply('help é teu cu');

       }
 if (message.content === 'path') {

       var absolute_path = __dirname;
       message.reply( absolute_path);
       
       }
 if (message.content === 'Marilene') {

  const dispatcher = connection.playFile('/app/Marilene.mp3');
 
      }

       


 // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('Aéé rapaziada, cheguei com os refri!');
        })
        .catch(console.log);
    } else {
      message.reply('Ó animal de teta, tu precisa entrar em um canal primeiro!!');
    }
  }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the bot token
