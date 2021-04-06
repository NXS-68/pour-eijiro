const Discord = require('discord.js')

module.exports = {
    name: 'slap',
    run: async (client, message, args) => {
        let ne = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633")
    let nv1 = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://i0.wp.com/haruhichan.com/wpblog/wp-content/uploads/Ryuuji-Takasu-x-Taiga-Aisaka-Toradora-anime-series-slap-haruhichan.com_.gif?resize=500%2C281")
    let vg = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-4.gif")
    let ns = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://31.media.tumblr.com/bc552888a0ab2b3535577102baf3579b/tumblr_mp7xsv9nH81qbvovho1_500.gif")
    let cm = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque  ")
    .setImage("https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-6.gif")
    let kcm = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif")
    let ng = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Otaku met une claque a Eijiro Kirishima ^^ ")
    .setImage("https://th.bing.com/th/id/R4cd06a746af96d8a91fd34113fe798b0?rik=hBAl3jmqzTOCUw&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fanime-spank-gif-1.gif&ehk=wxA%2fbVqvO%2f%2fg%2fiDnzsTlEBF92gf27zRGdxRENPa015M%3d&risl=&pid=ImgRaw")
    let np = new Discord.MessageEmbed()
    .setColor("#DF6D14")
    .setTitle("Eijiro Kirishima te met une claque ")
    .setImage("https://media.tenor.com/images/ae5709ae37b7e6dd038bcdc84b523c6e/tenor.gif")
        let tab = [
          ne,
          nv1,
          vg,
          ns,
          cm,
           kcm,
          ng,
          np
    ]
    let index = Math.floor(Math.random() * (tab.length))
    message.channel.send(tab[index])
    }
}