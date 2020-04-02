const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const { stripIndents } = require("common-tags");


var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : process.env.DB_SERVER,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DB
});

module.exports = {
  name: "kick",
  aliases: ["expulsar", "kickar"],
  description: "Expulse um usuário",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
    message.delete().catch(O_o => {});

    const member = getMember(message, args.join(" "));

    if (!message.member.hasPermission("KICK_MEMBERS")) {
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription("Sem permissão")
      .setColor(c.red);
      return message.channel.send(embed);
    }

    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Usuário inválido
        \nUse:
        \`\`kick <membro> [motivo]\`\``)
        .setColor(c.red)
        return message.channel.send(embed);
    }

    //    if (reason.length < 1){
    //        let embed = new Discord.RichEmbed()
    //        .setAuthor(message.author.tag, message.author.displayAvatarURL)
    //        .setDescription("Forneça uma razão")
    //        .setColor("#ff0000")
    //        return message.channel.send(embed)//.then(msg => msg.delete(100000))
    //    };

    message.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(e.ban +` **${user.tag}** foi expulso(a) por <@${message.author.id}>`);

      if (reason)
      embed.setDescription(e.ban +` **${user.tag}** foi expulso(a) por <@${message.author.id}>\n${e.config} **Razão:** ${reason}`);
    
    return message.channel.send(embed);
  }
};
