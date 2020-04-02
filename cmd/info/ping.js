const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports = {
  name: "ping",
  aliases: [""],
  description: "Veja seu ping",
  usage: "<input>",
  run: async (client, message, args) => {
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let Yes = "<:sucesso:620434637340147757>";
      let No = "<:erro:620435792225107969>";
      let embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(e.erro +" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
      }    
    
    const embed = await new Discord.RichEmbed()
      .setColor(c.blue)
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Host**", `${Date.now() - message.createdTimestamp}ms`, true)
      .addField("**API**", `${Math.round(client.ping)}ms`, true)
    return message.channel.send(embed);
    
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
