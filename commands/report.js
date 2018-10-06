const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Nie znaleziono użytkownika!");
  let reason = args.join(" ").slice(22);

  let reportembed = new Discord.RichEmbed()
  .setDescription('Report')
  .setColor("#ffe500")
  .addField("Zgłoszono", rUser + ' with ID: ' + rUser.id)
  .addField("Zgłoszono przez", message.author + " with ID: " + message.author.id)
  .addField("Kanał", message.channel)
  .addField("Czas", message.createdAt)
  .addField("Powód", reason);

  let repchannel = message.guild.channels.find(`name`, "reporty");
  if(!repchannel) return message.channel.send("Nie znaleziono kanału!");

  message.delete(1).catch(O_o=>{});
  repchannel.send(reportembed);
}

module.exports.help = {
  name: "report"
}
