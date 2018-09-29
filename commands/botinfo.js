const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displyAvatarUrl;
  let botembed = new Discord.RichEmbed()
  .setDescription("Wszystkie informacje o bocie!")
  .setColor('#8c00ff')
  .setThumbnail(bicon)
  .addField("Nazwa Bota:", bot.user.username)
  .addField("ID Bota:", bot.user.id)
  .addField("Utworzony:", bot.user.createdAt);
}

module.exports.help = {
  name: "botinfo"
}
