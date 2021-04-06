const Discord = require('discord.js')
ms = require('ms')

module.exports = {
    name: 'gstart',
    async run(message, args, client) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.')).then(sent => sent.delete({ timeout: 5e3 }));
        let channel = message.mentions.channels.first();
        if (!channel) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Veuillez préciser le salon')).then(sent => sent.delete({ timeout: 5e3 }));
        let giveawayDuration = args[1];
        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Veuillez fournir une durée valide')).then(sent => sent.delete({ timeout: 5e3 }));
        let giveawayWinners = args[2];
        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Veuillez fournir un nombre de gagnants valide !')).then(sent => sent.delete({ timeout: 5e3 }));
        let giveawayPrize = args.slice(3).join(" ");
        if (!giveawayPrize) return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Ok alors, je ne donnerai rien'));
        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            var: hostedBy = message.author.tag ? message.author : null, messages: {
                giveaway: (client.config ? "@Giveaway-Ping\n\n" : ""),
                giveawayEned: (client.config ? "@Giveaway-Ping\n\n" : "") + "GIVEAWAY TERMINER",
                timeRemaining: `Temps restant: **{duration}**`,
                inviteToParticipate: `Cliquez sur la réaction: 🎉 pour participer au giveaway`,
                winMessage: `🎉 Félicitations {winners}, vous avez gagné ** {prize} 🎉 **`,
                embedFooter: "temps du giveaway !",
                noWinner: `Impossible de déterminer un gagnant`,
                hostedBy: `crée par {user}`,
                winners: `Gagnant(es)`,
                endedAt: `Finis à : `,
                units: {
                    seconds: "secondes",
                    minutes: "minutes",
                    hours: `heures`,
                    days: `jours`,
                    pluralS: false
                }
            }
        })
    }
}