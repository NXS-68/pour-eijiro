const Discord = require('discord.js')
const reponse = []
// Dans les parenthèses tu met toutes tes réponses bg 
// Exemple : 
// ['slt','bjr','Oui','Non']

module.exports = {
    name: '8ball',
    run: async (client, message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Pose une question !')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor("#0073ff")
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    }
}