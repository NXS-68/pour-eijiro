const Discord = require('discord.js')

module.exports = {
    name: 'kiss',
    run: async (client, message, args) => {
        var kiss = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("**Kiss**")
        .setDescription("Eijiro Kirishima te fait un bisous !")
        .setImage("https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif")
        .setTimestamp()
        message.channel.send(kiss)
    }
}