const { RichEmbed } = require("discord.js");
const bot = process.env;

module.exports = {
  name: "emp",
  aliases: [""],
  description: "",
  usage: "[]",
  run: async (client, message, args) => {
            
    
      if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + " Sem permissão")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
        
    let canal_batepapo = client.channels.get("620094850183987221")
            
    if(message.member.roles.has(bot.cargo_empregado)) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + ` Você já possui um emprego`)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
    message.member.addRole(bot.emprego_legal2)
    message.member.addRole(bot.cargo_empregado);
    message.member.addRole(bot.cargo_separador);

    message.react("692731590639616060");
    
  }
}