const Discord = require('discord.js')

module.exports = {
    name: 'eijiro',
    run: async (client, message, args) => {
        var Eijiro = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("**__Information sur Eijiro Otaku__**")
    .setDescription("*voici ces réseaux*")
    .addField("`La chaine youtube : `","https://www.youtube.com/channel/UClB8rglQBOVO3c8VuozEsJg?view_as=subscriber",false)
    .addField("`l'instagram :`","https://www.instagram.com/eijirootaku/",false)
    .addField("`Le twiter : `","https://twitter.com/EijiroOtaku9",false)
    .setImage("https://64.media.tumblr.com/3563150d7d9c2ea4fb4ca3f320eb888f/7c1cd41acdfe7534-ab/s1280x1920/aa5b9128f164f7f24ee77f9c1f4d25f858f1be34.gif")
    .setTimestamp()
    message.channel.send(Eijiro)
    }
}