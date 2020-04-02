
const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports = { 
        name: "cat",
        description: "sends a picture of a cat!",
        usage: "cat",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["catto"],
    run: async (client, message, args) => {
    // let msg = await message.channel.send("Gerando foto")

    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Tente novamente!")

        let cEmbed = new RichEmbed()
        .setColor(c.blue)
        .setTitle(e.foto + ` Gato`)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
            message.channel.send(cEmbed)
            // msg.delete();
        })
    }
}