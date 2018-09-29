const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Informacje o serwerze")
  .setColor('#8c00ff')
  .setThumbnail(sicon)
  .addField("Nazwa:", message.guild.name)
  .addField("Założono:", message.guild.createdAt)
  .addField("Ty Dołączyłeś:", message.member.joinedAt)
  .addField("Użytkownicy", message.guild.memberCount);

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
