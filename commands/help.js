const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle('Dostępne komendy:')
        .setColor("#b802c9")
        .setImage(bot.user.displyAvatarUrl)
        .addField("$botinfo", 'Wyświetla informacje o bocie.')
        .addField("$serverinfo", 'Wyświetla informacje o serwerze.')
        .addField("$cat", "Wysyła losowe zdjęcie koteła!")
        .addField("$doggo", 'Wysyła losowe zdjęcie piesła!')
        .addField("$report {@użytkownik} {powód}", 'Zgłasza daną osobe.')
        .addField("$fortnite {nick} {platforma}", 'Twoje staty z gry Fortnite.')
        .addField("$8ball {pytanie}", 'Bot odpowie na twoje pytanie!')
        message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}