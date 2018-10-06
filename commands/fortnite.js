const Discord = require("discord.js");
const config = require("../botconfig.json");
const keys = require("../keys.json")
const Client = require("fortnite");
const fortnite = new Client('928e71e9-e1d5-43f6-87f9-06999b17d847');

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1] || 'pc';

    //$fortnite {username} {platform}
    if(!username) return message.reply("```Proszę podać nazwę gracza!```")

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        let wins = lifetime[8]['Wins'];
        let kd = lifetime[11]['K/d'];
        let mplayed = lifetime[7]['Matches Played'];
        let kils = lifetime[10]['Kills'];
        let winper = lifetime[9]['Win%'];
        let top3 = lifetime[1]['Top 3s'];
        let top5 = lifetime[0]['Top 5s'];

        let embed = new Discord.RichEmbed()
        .setTitle(data.username)
        .setColor("#b802c9")
        .addField("Wins", wins, true)
        .addField("Kills", kils, true)
        .addField("K/d", kd, true)
        .addField("Win%", winper, true)
        .addField("Matches Played", mplayed, true)
        .addField("Top 3s", top3, true)
        .addField("Top 5s", top5, true)
        message.channel.send(embed);
    });
}    

module.exports.help = {
    name: "fortnite"
}