const Discord = require('discord.js')

module.exports = {
        name: "anuncio",
        description: "sends a message that was inputted to a channel",
        usage: "!say",
        category: "moderation",
        accessableby: "Staff",
        aliases: ["bc"],
    run: async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
    const embed = new Discord.RichEmbed()
    .setColor(c.green)
    .setTitle("")
    .setDescription(e.unmute +` foi desmutado(a)`);
    message.channel.send(embed);
        mChannel.send(argsresult)
    }

    }
}