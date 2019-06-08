const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    let server = message.guild.id;
    if(message.member.hasPermission("ADMINISTRATOR")) {
        if(!db.get("serveurs").find({ serveur : server }).value()) {
            db.get("serveurs").push({ serveur: server }).write()
            message.channel.send("**:white_check_mark: | Le système de filtrage de mots est désormais activé sur votre serveur !**")
        }else {
            message.channel.send("**:x: | Vous avez dèja le système de filtrage de mots activé sur votre serveur. Pour le désactiver, merci de faire la commande `f!systemfilterwordsoff`!**")
        }
    }else {
        message.channel.send("**:x: | Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.**")
    }
}