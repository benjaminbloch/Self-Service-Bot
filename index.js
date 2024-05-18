require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();


let interval;
client.on('message', async msg => {
  switch (msg.content) {
  case "start":
      msg.reply("Hello! I am going to help you today. I will try my best to support you with what you need. Please do one of theese commands: ``claim`` - to claim a role ``human`` - talk to a human ``purchase`` buy something from us.");
      break;
      case "startt0kens1":
      msg.channel.send("Hello, when you are reeady to purchase please say  "ready"");
      msg.channel.send("Cost: $0.50 **PER TOKEN**");
      break;
case "startvip1":
      msg.channel.send("Hello, when you are reeady to purchase please say  "ready"");
      msg.channel.send("Cost: $5");
      break;
case "startt0kens2":
      msg.channel.send("Hello, when you are reeady to purchase please say  "ready"");
      msg.channel.send("Cost: $0.85 **PER NITRO TOKEN (1 MONTH)**");
      break;
case "startt0kens2":
      msg.channel.send("Hello, when you are reeady to purchase please say  "ready"");
      msg.channel.send("Cost: $1.25 **PER TOKEN**");
      break;
case "howtot0ken":
      msg.channel.send("How to use an account token: 1. Install [THIS](https://chromewebstore.google.com/detail/discord-token-login/ealjoeebhfijfimofmecjcjcigmadcai?hl=en) Chrome Extension. 2. Log Out Of Your Current Discord Account. 3. On The Top Right Corner, Click The Extension. 4. Paste The Token. 5. You Should Have Logged In.");
      msg.channel.send("**Note:** PC ONLY");
      break;
case "howton1tr0":
      msg.channel.send("How to redeem n1tr0: 1. Click on settings. 2. Click on gift inventory. 3. Enter the code.  4. If not a code, click on the link.");
      msg.channel.send("**NOTE** Nitro gift links exipre within 24 hours, if you dont redeem it then there will be **NO** refund!");
      break;
  case "ready":
      msg.reply("Ok! Please psy with [THIS LINK.](https://paypal.me/r8a1) Please make sure it is f&f though! ");
      msg.channel.send("/lock");
      break;
  case "im done":
      msg.reply("Ok, please wait for someone to confirm it. Thanks for the purchase!");
      msg.channel.send("/lock");
      break;
 case "purchase":
      msg.reply("Ok! I will help you with this. Please specify the item you would like to buy. If you dont know, please say ``idk``");
      break;
      case "token":
      msg.reply("Ok! To buy a account token please send the money to exotictermedfr@gmail.com Once done please say ``im done``");
      break;
      case "nitro3m":
      msg.reply("Ok! To buy a account token  that has 3 month nitro on it please send the money to exotictermedfr@gmail.com Once done please say ``im done``");
      break;
      case "nitrolink1m":
      msg.reply("Ok! To buy a nitro gift link that is 1 month nitro, please send the money to [this link.](https://paypal.me/drsusplayz) Once done please say ``im done``");
      break;
      case "nitrolink12m":
      msg.reply("Ok! To buy a nitro gift link that is 12 month nitro, please send the money to [this link.](https://paypal.me/drsusplayz) Once done please say ``im done``");
      break;
      case "nitro1m":
      msg.reply("Ok! To buy a account token that has 1 month nitro on it please send the money to exotictermedfr@gmail.com Once done please say ``im done``");
      break;
 case "idk":
      msg.channel.send("# List Of Products");
      msg.channel.send("t0ken - Account tokens. Command: ``t0ken``");
      msg.channel.send("nitro (1m) - Account tokens that have 1 month on it. Command: ``nitro1m``");
      msg.channel.send("nitro (3m) - Account tokens that have 3 month on it. Command: ``nitro3m``");
      msg.channel.send("nitro 1m gift link - A nitro gift link that is 1 month. Command: ``nitrolink1m``");
      msg.channel.send("nitro 3m gift link - A nitro gift link that is 12 month. Command: ``nitrolink12m``");
      break;
case "claim roles":
      msg.reply("Ok! I cant do that. Please wait for the owner/staff to support you.");
      msg.channel.send("/lock");
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
