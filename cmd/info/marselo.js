const Discord = require("discord.js");

module.exports = {
    name: "marselo",
    aliases: [""],
    category: "",
    description: "",
    usage: "",
    run: async (client, message, args) => {
      
      message.delete().catch(O_o => {});
      
      message.channel.send(`<:marselo4:688559203769384962><:marselo3:688559203568058439>
<:marselo2:688559201630421169><:marselo1:688559201252933644>`)
      
      
    }
}