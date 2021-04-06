const Discord = require('discord.js')

module.exports = {
    name: 'sug',
    run: async (client, message, args) => {
        message.delete()
        let msg = message.content.slice(4)

        let embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .addField("Nouvelle suggestion de " + message.author.username, msg)
        let msgreaction = await message.channel.send(embed)

        await msgreaction.react("✅")
        await msgreaction.react("❌")
    }
}