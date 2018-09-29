const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  message.channel.send('Pieseł :dog:' + body.url);
}

module.exports.help = {
  name: "doggo"
}
