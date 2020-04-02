const talkedRecently = new Set();
const Discord = require("discord.js");
const { formatDate } = require("../../functions.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "sugerir",
  aliases: ["sugerir"],
  description: "Envie uma sugestão",
  usage: "<input>",
  run: async (client, message, args, ops) => {
    
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Aguarde **5** minutos")
        .setColor(c.red)
      message.channel.send(embed);
      return;
      }

    const moment = require("moment");
    moment.locale("pt-BR");
    const data = moment(message.createdAt).format("LLL (L)");
    
    let reason = args.slice(0).join(" ");

    if (reason.length < 1) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(e.incorrect + ` Insira sua sugestão
        \nUse:
        \`\`sugerir <sugestao>\`\``)
      .setColor(c.red);
      return message.channel.send(embed);

    }

    const suggest = message.guild.channels.find(s => s.name === "sugestões");
    message.delete().catch(O_o => {})
    if (!suggest) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(e.incorrect + ` Não foi possível localizar o canal \`\`#sugestões\`\`, chame um administrador`)
      .setColor(c.red);
      return message.channel.send(embed);

    }
    message.delete().catch(O_o => {})
    const msg = new RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription(e.correct + ` Sugestão enviada com sucesso`)
    .setColor(c.green);
    
    const embed = new RichEmbed()
    .setColor(c.red)
      // .setFooter(message.guild.name, message.guild.iconURL)
    .setAuthor(`Sugestão de ${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(e.config + ` **Sugestão:** ${reason}`)
    .setFooter(`Em ${data}`)
    suggest.send(embed);
    message.channel.send(msg);
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 300000);
  }
};
