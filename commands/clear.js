const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MENAGE_MESSAGES")) return message.reply("```Nie masz uprawnień do użycia tej komendy!```");
  if(!args[0]) return message.channel.send("Oof!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Usunięto ${args[0]} wiadomości!`).then(msg => msg.delete(5000));
    if (err) console.log(err)
  })

  if(args[0] > 100) return message.channel.send("```Nie możesz usunąć więcej niż 100 wiadomości na raz!```").then(msg => msg.delete(5000));
}

module.exports.help = {
  name: "clear"
}
