const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "671861268109459472";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Coloque este comando em um canal de ticket");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Oi, " + message.channel.name)
        .setDescription("O seu ticket está marcado como **completo**")
        .setFooter("Ticket fechado");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "ticket-logs");
    if (!logChannel) return message.channel.send("O canal não existe");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}