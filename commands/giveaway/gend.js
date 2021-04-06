const ms = require('ms')

module.exports = {
    name: 'gend',
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        if (!args[0]) return message.channel.send('Spécifie l\'id du message')

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
        if (!giveaway) return message.channel.send('Ce giveaway n\'existe pas')

        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        }).then(() => {
            message.channel.send(`Giveaway se terminera dans moins de ${client.giveaway.options.updateCountdownEvery / 1000} secondes`)
        }).catch(err => {
            console.log(err)
            message.channel.send('Une erreur est survenue')
        })

    }
}