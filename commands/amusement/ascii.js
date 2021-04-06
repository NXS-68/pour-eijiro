const figlet = require('figlet');

module.exports = {
    name: "ascii",

    async run(client, message, args) {
        if (!args[0]) return message.channel.send('Ecris un texte');

        let msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Un problème est survenue');
                console.dir(err);
            }
            if (data.length > 2000) return message.channel.send('fournis un texte de moins de 2000 caractères')

            message.channel.send('```' + data + '```')
        })
    }
}