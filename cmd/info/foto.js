const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "foto",
  aliases: ["avatar", "pic"],
  description: "Veja a foto de alguém",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
    
    const member = getMember(message, args.join(" "));
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Aguarde **3** segundos")
        .setColor(c.red)
      message.channel.send(embed);
      return;
      }
    
    
    let userImage = member.user.displayAvatarURL.split('.').pop().split("?").shift();
    const embed = new Discord.RichEmbed()
    .setTitle(`${e.foto} ${member.displayName}`)
    .setDescription(`**Clique [aqui](${member.user.displayAvatarURL}) para baixar a imagem**`)
    .setColor(c.blue)
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    if(userImage == 'png'){
        embed.setImage(member.user.displayAvatarURL);
    }else if(userImage == 'gif'){
        embed.setImage(member.user.displayAvatarURL + '?size=2048');
    }else if(userImage == 'jpg'){
        embed.setImage(member.user.displayAvatarURL + '?size=2048');
    }
        if (member.user.bot)
      embed.setTitle(`${e.foto} ${e.bot} ${member.displayName}`)
    
    message.channel.send({ embed });
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
