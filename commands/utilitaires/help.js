const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help_embed = new Discord.RichEmbed()
        .setTitle("📋 • __Listes des commandes disponibles__")
        .addField("⭐ • __Administration__", "`En cours de développement.`")
        .addField("🌐 • __Utilitaires__", "`help`")
    message.channel.send(help_embed)
}