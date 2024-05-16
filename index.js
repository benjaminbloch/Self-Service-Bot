require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

let interval;
client.on('message', async msg => {
  switch (msg.content) {
  case "start":
      msg.reply("Hello! I am going to help you today. I will try my best to support you with what you need.);
      msg.reply("/lock");
      break;
  case "claim":
      msg.reply("Ok! I cant do that. Please wait for the owner/staff to support you.");
      msg.reply("/lock");
      break;
 case "purchase":
      msg.reply("Ok! I will help you with this. Please specify the item you would like to buy. If you dont knoow, please say ``idk``");
      break;
 case "idk":
      msg.reply("```t0kens``` ```nitro (1m)``` ```nitro (3m)``` ```nitro 1m giftlink``` ```nitro 1 year giftlink`` **NOTE: please write the exact command**");
      break;
case "claim roles":
      msg.reply("Ok! I cant do that. Please wait for the owner/staff to support you.");
      msg.reply("/lock");
      break;
    case "!meme":
      msg.channel.send("Here's your meme!");
      const img = await getMeme();
      msg.channel.send(img);
      break;
   
  }
});

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  console.log(res.data)
  return res.data.memes[0].url;
}


//must be last line
client.login(process.env.CLIENT_TOKEN);
