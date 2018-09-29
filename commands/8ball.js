const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Proszę zadać pełne pytanie!");
  let replies = ['Tak.', 'Nie.', "Nie wiem.", "Zapytaj ponownie później."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#3f3f3f")
  .addField("Pytanie", question)
  .addField("Odpowiedź", replies[result]);

  message.channel.send(ballembed)
}

module.exports.help = {
  name: "8ball"
}
