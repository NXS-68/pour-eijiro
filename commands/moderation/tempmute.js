const Discord = require('discord.js')

module.exports = {
    name: 'tempmute',
    run: async (client, message, args) => {
        let mention = message.mentions.members.first();

        if (mention == undefined) {
            message.reply("Membre non ou mal mentionné.")
        }
        else {
            let args = message.content.split(" ");

            mention.roles.add("803323907712876604");
            setTimeout(function () {
                mention.roles.remove("803323907712876604");
                message.channel.send("<@" + mention.id + "> tu peux désormais parler de nouveau !");

            }, args[2] * 1000);
        }
    }
}