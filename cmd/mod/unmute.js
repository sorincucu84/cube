const { RichEmbed } = require("discord.js");
const bot = process.env;

module.exports = {
  name: "unmute",
  aliases: ["desmutar"],
  description: "Desmute um usuário",
  usage: "[]",
  run: async (client, message, args) => {
    
      message.delete().catch(O_o => {});
    
    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + ` Usuário inválido
        \nUse:
        \`\`unmute <membro>\`\``)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + " Sem permissão")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    
    let muterole = message.guild.roles.find(r => r.name === "Mutado");
    
    if(!member.roles.has(muterole.id)) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + ` Membro não está mutado(a)`)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
    member.removeRole(muterole.id);
    const embed = new RichEmbed()
      .setColor(bot.color_green)
      .setDescription(bot.emote_unmute +` **${member.user}** foi desmutado(a) por **${message.author.tag}**`);

    message.channel.send(embed);
    
  }
}