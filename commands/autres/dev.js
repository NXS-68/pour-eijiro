const Discord = require('discord.js')

module.exports = {
    name: 'dev',
    run: async (client, message, args) => {
        var dev = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("*Le Dévlopeur Du bot.")
            .setDescription("*Pour me soutenir : *")
            .addField("`Mon Serveur Discord : `", "https://discord.gg/sgvMfWNq9t", false)
            .setImage("https://media.tenor.com/images/5f24d85ac80a177401dec3ef2edc3c38/tenor.gif")
            .setTimestamp()
        message.channel.send(dev)
    }
}