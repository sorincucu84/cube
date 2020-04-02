const talkedRecently = new Set();
const Discord = require("discord.js");
const { formatDate } = require("../../functions.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "report",
  aliases: ["reportar"],
  description: "Reporte alguém",
  usage: "<input>",
  run: async (client, message, args, ops) => {
    message.delete().catch(O_o => {});
    

    const moment = require("moment");
    moment.locale("pt-BR");
    const data = moment(message.createdAt).format("LLL (L)");
    
    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    
    let reason = args.slice(1).join(" ");
    let user = message.mentions.users.first();
    
      if (talkedRecently.has(message.author.id)) {

      let embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
      }
    
    if (message.mentions.users.size < 1) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(e.incorrect + ` Mencione um usuário
        \nUse:
        \`\`report <membro> <motivo>\`\``)
      .setColor(c.red);
      return message.channel.send(embed);
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
    }

    if (rMember.user.bot) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Sem permissão para reportar bots")
        .setColor(c.red);
      return message.channel.send(embed);
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
    }

    if (reason.length < 1) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(e.incorrect + ` Forneza um motivo
        \nUse:
        \`\`report <membro> <motivo>\`\``)
      .setColor(c.red);
      return message.channel.send(embed);

    }

    const canalreport = message.guild.channels.find(c => c.name === "reports");

    if (!canalreport) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(e.incorrect + ` Não foi possível localizar o canal \`\`#reports\`\`, chame um administrador`)
      .setColor(c.red);
      return message.channel.send(embed);

    }
    
    const msg = new RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription(e.correct + ` Report feito com sucesso`)
    .setColor(c.green);
    
    const embed = new RichEmbed()
    .setColor(c.red)
      // .setFooter(message.guild.name, message.guild.iconURL)
    .setAuthor(`Report de ${message.author.tag}`, message.author.displayAvatarURL)
    .addField(e.id + ` **Membro**`, rMember, true)
    .addField(e.message + ` **Canal**`, message.channel, true)
    .addField(e.config + ` **Razão**`, `${args.slice(1).join(" ")}`, true)
    .setFooter(`Em ${data}`)
    canalreport.send(embed);
    message.channel.send(msg);
    
  }
};
