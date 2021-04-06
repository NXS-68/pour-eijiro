const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection()
client.snipes = new Map()
client.aliases = new Discord.Collection()

client.on("ready", async () => {
    const status = [
        'les Héros.GG !',
        'My Héro Academia',
        'En dévlopement | .help'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(status[i], ({ type: 'STREAMING', url: 'https://www.twitch.tv/eijirooku' }))
        i = ++i % status.length

    }, 1e4)
    console.log("le bot est allumé");

})
client.once('ready', () => {
    console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

const prefix = ".";

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command)
        command.run(client, message, args);
});

if (message.content === prefix + 'r1') {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("```[règle 1] : Les spams, les spoils dans les salons inadéquat, les insultes et les propos pouvant être rabaissant, etc... seront sanctionnés d’un warn.```")
    }
}
if (message.content === prefix + 'r2') {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("```[règle 2] : Toutes sortes de pub Mp sera sanctionné d'un warn un channel <#803323960866766900> permet de partager vos serveurs.```")
    }
} if (message.content === prefix + 'r3') {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("```[règle 3] : Toutes les images incitant la haine ou a caractères pornographique seront sanctionnés directement et aucunes excuses ne sera tolérée.```")
    }
} if (message.content === prefix + 'r4') {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("```[règle 4] : Lorsque un Modérateur ou un admin Vous oblige a arrêter un débat il vous sera avec obligation de l'arrêter sous peine de mute ou d'un warn.```")
    }
}
var yo = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("**Yo**")
    .setDescription("**Eijiro Kirishima** te dis salut !")
    .setImage("https://images-ext-1.discordapp.net/external/gJ60zvSuHDwc-rm-56wAmTkWfPXNNek_r_DugGksyFc/https/64.media.tumblr.com/293eec960ceeba01da2ac6235d25e58f/aa1355543aa54e16-3d/s500x750/2995c9c43849ce84039f650e75f7e08e0ca43116.gif")
    .setTimestamp()

if (message.content === prefix + 'yo') {
    message.delete();
    message.channel.send(yo)
}
var ort = new Discord.MessageEmbed()
    .setColor("ff0000")
    .setTitle("Tiens toi, sah ça va t'aider")
    .addField("**Ton orthographe pue la merde !**", "https://bescherelle.com/", false)
    .setImage("")
    .setTimestamp()

if (message.content === prefix + 'ort') {
    message.delete();
    message.channel.send(ort)
}

client.on('guildMemberAdd', (member) => {

    let welcomeChannel = client.channels.cache.get('820935941941493781');
    var salut = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("**Bienvenue a Eijiro Academia !!!  **  " + member.displayName)
        .setAuthor("Eijiro Kirishima")
        .setDescription(`${member} N'hesite pas a prendre tes roles dans <#808107184524754974> et a lire le reglement dans <#803323930487816242>, passe des bons moments parmis nous !`)
        .setImage("https://images-ext-2.discordapp.net/external/B79AVCJQQikonlzZPVMvJv3plp8vzSlyn79gHc-y7MQ/https/images-ext-2.discordapp.net/external/7GqlXiEWDt_atP0pCWXx43vZc6_XncKUHKBjX909B9E/https/data.whicdn.com/images/336862804/original.gif")
        .setFooter("Eijiro Academia")
        .setTimestamp()
    welcomeChannel.send(salut);
});
client.on('guildMemberRemove', (member) => {

    let leaveChannel = client.channels.cache.get('820935941941493781');
    var revoir = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("**Ce fut un plaisir jeune Otaku !** ")
        .setAuthor("Eijiro Kirishima")
        .setDescription(`*Vous pouvez tous dire bye bye à* ${member} !!`)
        .setImage("https://64.media.tumblr.com/2076dfc42676a2a0feae3344a47e8d0e/tumblr_inline_pb7y9uftFv1ubxux5_500.gif")
        .setFooter("Eijiro Académia")
        .setTimestamp()
    leaveChannel.send(revoir)
});

client.on('message', async message => {
    if (message.content.startsWith(`${config.PREFIX}pfc`)) {
        let args = message.content.substring(config.PREFIX.length).split(' ');
        if (!args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Choisis entre pierre feuille ou ciseaux')
                .setColor('#0073ff')
            message.channel.send(embed)
        }

        let choices = ['pierre', 'feuille', 'ciseaux'];
        if (choices.includes((args[1]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Egalité : ' + (args[1]).toLowerCase())
                    .setColor('#0073ff')
                message.channel.send(embed)

            }
            if (number == 2) {
                if ((args[1]).toLowerCase() == "pierre") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('J\'ai gagné, j\'avais une feuille.')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
                if ((args[1]).toLowerCase() == "feuille") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('J\'ai gagnée, j\'avais un ciseaux')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
                if ((args[1]).toLowerCase() == "ciseaux") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('J\'ai gagné, j\'avais une pierre.')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
            }
            if (number == 0) {
                if ((args[1]).toLowerCase() == "pierre") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('Tu as gagné, j\'avais des ciseaux.')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
                if ((args[1]).toLowerCase() == "feuille") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('Tu as gagné, j\'avais une pierre.')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
                if ((args[1]).toLowerCase() == "ciseaux") {
                    const EMBED = new Discord.MessageEmbed()
                        .setTitle('Tu as gagné, j\'avais une feuille.')
                        .setColor('#0073ff')
                        .setTimestamp()
                    message.channel.send(EMBED)
                }
            }
        } else {
            const EMBED = new Discord.MessageEmbed()
                .setTitle('La valeur est invalide il faut choisir entre pierre, feuille ou ciseaux')
                .setColor('#0073ff')
                .setTimestamp()
            message.channel.send(EMBED)
        }
    }
})

client.on('messageDelete', function (message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})



client.on('message', async message => {

    if (message.content.startsWith(`${config.PREFIX}snipe`)) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas les permissions pour utiliser cette commande')

        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.channel.send('Il n\'y a aucun snipe')

        const snipeembed = new Discord.MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(msg.content)
            .setColor('BLUE')
        message.channel.send(snipeembed)
    }
})

client.on('message', async message => {
    if (message.author.bot) return
    if (message.content === `${config.PREFIX}embed`) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission de crée un embed')
        let EmbedBeforeEdit = new Discord.MessageEmbed()
        let msgEmbedEditing = await message.channel.send(EmbedBeforeEdit)
        const msgawait = await message.channel.send(new Discord.MessageEmbed()
            .setTitle('<a:thinking_loading:817516841848930305> Chargement ...'))

        await Promise.all(['✏️', '💬', '🕵️', '🔻', '🔳', '🕙', '🖼️', '🌐', '🔵', '↩️', '📥', '✅'].map(r => msgawait.react(r)))
        await msgawait.edit(new Discord.MessageEmbed()
            .setTitle('<a:monde2:820607526349438976> **Voici le panel de la création d\'un embed**')
            .setDescription(`:pencil2: Modifier le titre\n:speech_balloon: Modifier la description\n:detective: Modifier l'auteur\n:small_red_triangle_down: Modifier le footer\n:white_square_button: Modifier le thumbnail\n:clock10: Ajouter un timestamp\n:frame_photo: Modifier l'image\n:globe_with_meridians: Modifier l'url\n:blue_circle: Modifier la couleur\n:leftwards_arrow_with_hook: Ajouter un field\n:inbox_tray: Copier un embed existant\n:white_check_mark: Envoyer l'embed`))
        const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot
        const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot
        const CollectorReaction = await new Discord.ReactionCollector(msgawait, filterReaction)
        CollectorReaction.on('collect', async reaction => {
            switch (reaction._emoji.name) {
                case '✏️':
                    const msgQuestionTitle = await message.channel.send('Quel sera le titre de votre embed ?')
                    const title = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionTitle.delete()
                    EmbedBeforeEdit.setTitle(title)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '💬':
                    const msgQuestionDescription = await message.channel.send('Quel sera la description de votre embed ?')
                    const description = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionDescription.delete()
                    EmbedBeforeEdit.setDescription(description)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🕵️':
                    const msgQuestionauthor = await message.channel.send('Quel sera l\'author de votre embed ?')
                    const author = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionauthor.delete()
                    EmbedBeforeEdit.setAuthor(author)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🔻':
                    const msgQuestionFooter = await message.channel.send('Quel sera le footer de votre embed ?')
                    const footer = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionFooter.delete()
                    EmbedBeforeEdit.setFooter(footer)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🔳':
                    const msgQuestionthumb = await message.channel.send('Quel sera thumbnail de votre embed ? `Lien https` ou `Lien http`')
                    const thumb = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    if (!thumb.includes('http') || !thumb.includes('https')) return message.channel.send('Tu dois donner une URL : `http` ou `https`')
                    message.delete()
                    msgQuestionthumb.delete()
                    EmbedBeforeEdit.setThumbnail(thumb)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🕙':
                    EmbedBeforeEdit.setTimestamp()
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🖼️':
                    const msgQuestionImage = await message.channel.send('Quel sera l\'image de votre embed ? `Lien https` ou `Lien http`')
                    const image = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    if (!image.includes('http') || !image.includes('https')) return message.channel.send('Tu dois donner une URL : `http` ou `https`')
                    message.delete()
                    msgQuestionImage.delete()
                    EmbedBeforeEdit.setImage(image)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🌐':
                    const msgQuestionURL = await message.channel.send('Quel sera l\'URL de votre embed')
                    const URL = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    if (!URL.includes('http') || !URL.includes('https')) return message.channel.send('Tu dois donner une URL : `http` ou `https`')
                    message.delete()
                    msgQuestionURL.delete()
                    EmbedBeforeEdit.setURL(URL)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '🔵':
                    const msgQuestioncolor = await message.channel.send('Quel sera la couleur de votre embed ? `nom de la couleur en anglais en majuscules` ou `HexColor`')
                    const color = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestioncolor.delete()
                    EmbedBeforeEdit.setColor(color)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '↩️':
                    const msgQuestionfield = await message.channel.send('Quel sera le field de votre embed')
                    const field = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionfield.delete()
                    const msgQuestiondescfield = await message.channel.send('Quel sera la description field de votre embed')
                    const descfield = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestiondescfield.delete()
                    EmbedBeforeEdit.addField(field, descfield)
                    msgEmbedEditing.edit(EmbedBeforeEdit)
                    break;
                case '✅':
                    const msgQuestionchannel = await message.channel.send('Veuillez mettre l\'id du salon')
                    const channel = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content
                    message.delete()
                    msgQuestionchannel.delete()
                    if (!message.guild.channels.cache.get(channel)) return message.channel.send('Ce salon est invalide')
                    else message.guild.channels.cache.get(channel).send(EmbedBeforeEdit)
                    break;
            }
        })
    }
})

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json", // Création du fichier giveaways.json (Création automatique)
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
})