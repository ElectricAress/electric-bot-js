const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
const fastify = require("fastify")

fastify.listen(process.env.PORT || 3000, function (err) {
  if (err) throw err
  console.log(`Server listening on ${fastify.server.address().port}`)
})

fs.readdir("commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/` + f);
    console.log(f + " loaded!");
    bot.commands.set(props.help.name, props)
  });

});

bot.on("ready", async () => {
  console.log(bot.user.username + ' is online!');
  bot.user.setActivity("Fortnite", {type: "PLAYING"})
});

//bot.on("guildMemberAdd", async member => {
  
  //let welcomechannel = member.guild.channels.find(`name`, "welcome");
  //welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined the party!`)
//});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let cEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💵", `Dodano ${coinAmt} monet!`);
  
  message.channel.send(cEmbed).then(msg => {msg.delete(5000)});
  }


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commfile = bot.commands.get(cmd.slice(prefix.length));
  if(commfile) commfile.run(bot,message,args);
});

bot.login(botconfig.token);
