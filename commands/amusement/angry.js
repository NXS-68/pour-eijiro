module.exports = {
    name: 'angry',
    run: async (client, message, args) => {
        message.delete();
        message.channel.send(angry)
        var angry = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("**Enervé**")
            .setDescription("Eijiro Kirishima est énervé !")
            .setImage("https://images-ext-2.discordapp.net/external/8EuQuXBK25Ut9qJkfWbiDAsn5kcuyoAurAEc20nPFoU/https/64.media.tumblr.com/2076dfc42676a2a0feae3344a47e8d0e/tumblr_inline_pb7y9uftFv1ubxux5_500.gif")
            .setTimestamp()
        message.channel.send(angry)
    }
}