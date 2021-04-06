const Discord = require("discord.js")

module.exports = {
    name: 'dm',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission.")

        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
        if (!user)
            return message.channel.send(
                `Vous n'avez pas mentionné un utilisateur`
            );
        if (!args.slice(1).join(" "))
            return message.channel.send("Tu n'as pas spécifier de message");
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send("Cet utilisateur n'a pas pu être DM"))
            .then(() => message.channel.send(`${user} à bien été dm`));
    }
}