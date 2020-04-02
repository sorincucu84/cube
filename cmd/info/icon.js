const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "icon",
  aliases: ["ab"],
  description: "Veja a foto de alguém",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
    
    const member = getMember(message, args.join(" "));
        
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(e.erro +" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
      }
    
    let userImage = message.guild.iconURL.split('.').pop().split("?").shift();

    const embed = new Discord.RichEmbed()
      .setDescription(`**Clique [aqui](${message.guild.iconURL}) para baixar a imagem**`)
      .setTitle(`${e.foto} ${message.guild.name}`)
      .setColor(c.blue)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL)
    if(userImage == 'png'){
      message.guild.iconURL.split('.').forEach((content) => {
      if(content.split('/').includes("com")){
        embed.setImage("https://cdn.discordapp.com/icons/" + message.guild.id + "/" + content.split('/')[3] + ".png" + '?size=2048');
      }
    })
    }else if(userImage == 'gif'){
      message.guild.iconURL.split('.').forEach((content) => {
      if(content.split('/').includes("com")){
        embed.setImage("https://cdn.discordapp.com/icons/" + message.guild.id + "/" + content.split('/')[3] + ".gif" + '?size=2048');
      }
    })
    }else if(userImage == 'jpg'){
      message.guild.iconURL.split('.').forEach((content) => {
      if(content.split('/').includes("com")){
        embed.setImage("https://cdn.discordapp.com/icons/" + message.guild.id + "/" + content.split('/')[3] + ".png" + '?size=2048');
      }
    })
    }
    message.channel.send({ embed });
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
