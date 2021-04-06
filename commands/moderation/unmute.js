const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first();
        let sanctionschannel = client.channels.cache.get('803327597491781692')

        if (mention == undefined) {
            message.reply("Membre non ou mal mentionné.")
        }
        else {
            mention.roles.remove("803323907712876604");
            var unmute = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setAuthor("Eijiro Kirishima")
                .setTitle("unmute")
                .addField("**Utilisateur : **", mention.displayName, true)
                .addField("Modérateur :", message.author, true)
                .setFooter("Eijiro Académia")
                .setTimestamp()
            sanctionschannel.send(unmute);
            message.reply(mention.displayName + " a été unmute avec succès")
        }
    }
}