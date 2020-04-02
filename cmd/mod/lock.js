const Discord = require('discord.js')

module.exports = {
  name: "lock",
  aliases: ["trancar"],
  description: "Tranque um canal",
  usage: "",
  run: (client, message, args) => {
    
    message.delete().catch(O_o => {});

    let reason = args.slice(0).join(' ');
    
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Sem permissão")
        .setColor(c.red)
        return message.channel.send(embed);
    };
    
      var lock = message.guild.roles.find(r => r.name === "@everyone")
      message.channel.overwritePermissions(lock, {
        SEND_MESSAGES: false
      });
       
    const embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(e.lock +`**Canal:** ${message.channel} foi bloqueado por <@${message.author.id}>`);

      if (reason)
      embed.setDescription(e.lock +` **Canal:** ${message.channel} foi bloqueado por <@${message.author.id}>\n${e.config} **Motivo:** ${reason}`);
    
    return message.channel.send(embed);
        }
  }
