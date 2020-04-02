const Discord = require('discord.js')


module.exports = {
  name: "unlock",
  aliases: ["destrancar"],
  description: "Destranque um canal",
  usage: "",
  run: (client, message, args) => {
    
    message.delete().catch(O_o => {});

  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Sem permissão")
        .setColor(c.red)
        return message.channel.send(embed);
    };
  
      var unlock = message.guild.roles.find(r => r.name === "@everyone")
      message.channel.overwritePermissions(unlock, {
        SEND_MESSAGES: true
       });
    const embed = new Discord.RichEmbed()
      .setColor(c.green)
      .setDescription(e.unlock +`**Canal:** ${message.channel} foi desbloqueado por <@${message.author.id}>`); 
    return message.channel.send(embed);
        }

  }
