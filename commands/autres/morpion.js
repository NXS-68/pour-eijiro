const { tictactoe } = require('reconlx')

module.exports = {
    run: async (message, args, client) => {
        const member = message.mentions.members.first() || message.members
        if (!member) return message.channel.send('Mentionne une personne')

        new tictactoe({
            player_two: member,
            message: message
        })
    },
    name: 'morpion'
}

// pour mettre en français le morpion
// 1) allez dans node_modules
// 2) allez dans le dossier reconlx dans node_modules
// 3) allez dans data dans le dossier reconlx
// 4) allez dans class 
// 5) allez dans le dossier tictatoe
// 6) allez dans le fichier tictatoe
// 7) dans le fichier à chaque fois qu'il ya écrit "Won !","it is you turn", "Drew !" , il faudra le traduire en français
