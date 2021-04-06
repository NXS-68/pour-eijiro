const Discord = require('discord.js'),
    ms = require('ms');

module.exports = {
    async run(message, args, client) {
        message.delete()

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.')).then(sent => sent.delete({ timeout: 5e3 }));

        if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription('L\'ID du giveaway n\'a pas était mis')).then(sent => sent.delete({ timeout: 5e3 }));

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if (!giveaway) return message.channel.send(new Discord.MessageEmbed()
            .setDescription("Impossible de trouver un giveaway avec cette id")).then(sent => sent.delete({ timeout: 5e3 }));

        client.giveawaysManager.reroll(giveaway.messageID)
            .then(() => {
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription('Giveaway relancé'))
            })
            .catch((e) => {
                if (e.startsWith(`L\'ID du giveaway mis: ${giveaway.messageID} n\'est pas fini !`)) {
                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription('Ce giveaway n\'est pas encore terminé.')).then(sent => sent.delete({ timeout: 5e3 }))
                } else {
                    console.error(e);
                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription('Une erreur s\'est produite')).then(sent => sent.delete({ timeout: 5e3 }))
                }
            })
    },
    name: "greroll"
}

