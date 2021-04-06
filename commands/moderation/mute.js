const Discord = require('discord.js')

module.exports = {
    name: 'mute',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first();
        const reason = args.splice(1).join(' ');
        let sanctionschannel = client.channels.cache.get('803327597491781692')

        if (mention == undefined) {
            message.reply("Membre non ou mal mentionné.");
        }
        else {
            mention.roles.add("803323907712876604");
            var mute = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setAuthor("Eijiro Kirishima")
                .setTitle("mute")
                .addField("**Utilisateur : **", mention.displayName, true)
                .addField("Modérateur :", message.author, true)
                .addField("**raison : **", reason, true)
                .addField("**Durée :**", "∞", true)
                .setFooter("Eijiro Académia")
                .setTimestamp()
            sanctionschannel.send(mute);
            message.reply(mention.displayName + " a été muté avec succès")
        }
    }
}