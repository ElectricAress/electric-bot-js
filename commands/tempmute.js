const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Nie znaleziono użytkownika!");
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("```Nie masz uprawnień do używania tej komendy!```");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie można wyciszyć!");
  let muterole = message.guild.roles.find(`name`, "Wyciszony");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Wyciszony",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Nie ustaliłeś czasu!");

  await(tomute.addRole(muterole.id));
  message.reply('<@' + tomute.id + '>' + ' został wyciszony na ' + ms(mutetime));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send("<@" + tomute.id + '>' + ' Usunięto wyciszenie!');
  }, ms(mutetime));
};

module.exports.help = {
  name: "tempmute"
}
