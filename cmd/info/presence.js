const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "presence",
  aliases: ["playing"],
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
    
    message.guild.members.forEach((member, key) => {
      console.log(member.user.username + " - " + member.user.presence.status);
    })
    
    //message.channel.send(`<@${member.user.id}> - Status: **${status}**`);
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
