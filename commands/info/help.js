const Discord = require('discord.js')

module.exports = {
    name: 'help',
    run: async (client, message, args) => {
        var help = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("**LISTE DES COMMANDES**")
        .setURL("https://www.youtube.com/channel/UClB8rglQBOVO3c8VuozEsJg?view_as=subscriber")
        .setAuthor("Eijiro Kirishima")
        .setDescription("**Les commandes de Modération**")
        .setDescription("・・─────────・あ・─────────・・")
        .addField("★ﾟ・: **.ban** : ```pour bannir un user du serveur.```",`\u200B`)    
        .addField("★ﾟ・: **.kick** : ```pour exclure un user du serveur.```",`\u200B`) 
        .addField("★ﾟ・: **.mute** : ```pour enlever le droit à la parole à un user.```",`\u200B`) 
        .addField("★ﾟ・: **.unmute** : ```pour rétablir le droit à la parole à un user.```",`\u200B`) 
        .addField("★ﾟ・: **.clear** : ```pour effacer des messages.```",`\u200B`)  
        .addField("★ﾟ・: **.say** :```pour que le bot dise ce que vous souhaitez.```",`\u200B`)
        .addField("★ﾟ・: **.embed** : ```pour que le bot dise ce que vous souhaitez version embed.```",`\u200B`)
        .addField("・・─────────・あ・─────────・・",`\u200B`)
        .setImage("https://i.pinimg.com/originals/43/50/4c/43504c851902166597d563d49f4fc0e8.gif")
        .setThumbnail("")
        .setFooter("Eijiro Kirishima")
        .setTimestamp()
       message.channel.send(help)
    }
}