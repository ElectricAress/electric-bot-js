const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow`);

  message.channel.send('Koteł :cat:' + body.file);
}

module.exports.help = {
  name: "cat"
}
