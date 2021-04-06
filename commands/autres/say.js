module.exports = {
    name: 'say',
    run: async (client, message, args) => {
        message.delete();
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            let msg = message.content.slice(4)
            if (!msg) return message.reply("**Veillez entrez un messaage.**")


            message.channel.send(msg)
        }
    }
}