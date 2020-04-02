const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');


module.exports = { 
        name: "dog",
        description: "Sends a picture of a dog!",
        usage: "dog",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["doggo", "puppy"],
    run: async (bot, message, args) => {
    // let msg = await message.channel.send("Gerando foto")

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Tente novamente!")

        let dEmbed = new RichEmbed()
        .setColor(c.blue)
        .setTitle(e.foto + ` Cachorro`)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)

            message.channel.send(dEmbed)
        })
    }
}