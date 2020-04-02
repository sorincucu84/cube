const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "uptime",
  aliases: ["up"],
  description: "Veja quanto tempo o bot está online",
  run: async (client, message, args) => {
    message.delete().catch(O_o => {});

    const moment = require("moment");
    require("moment-duration-format");
    
      let green = "#50ba4e"
      let red = "#db6058"
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let Yes = "<:sucesso:620434637340147757>";
      let No = "<:erro:620435792225107969>";
      let embed = new Discord.RichEmbed()
      .setColor(red)
      .setDescription(No +" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
    }
    


    const embed = new Discord.RichEmbed()
      .setColor("#00b0f4")
      .setDescription(`**${e.relogio} Online há ${moment.duration(client.uptime).format("d [Dia(s) e] h [Hora(s) e] m [Minuto(s) e] s [Segundos]")}**`);
    message.channel.send(embed);
  talkedRecently.add(message.author.id);
  setTimeout(() => {
  talkedRecently.delete(message.author.id);
  }, 3000);
  }
};
