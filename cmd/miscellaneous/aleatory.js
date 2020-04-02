const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports = { 
        name: "aleatory",
        description: "sends a aleatory picture!",
        usage: "aleatory",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["aleatorio"],
    run: async (client, message, args) => {
    // let msg = await message.channel.send("Gerando foto")

    fetch(`https://loremflickr.com/json/320/240/all`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Tente novamente!")

        let cEmbed = new RichEmbed()
        .setColor(c.blue)
        .setTitle(e.foto + ` Aleatório`)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
            message.channel.send(cEmbed)
            // msg.delete();
        })
    }
}