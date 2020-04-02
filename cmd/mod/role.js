const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "roole",
  aliases: [""],
  description: "",
  usage: "[]",
  run: (client, message, args) => {
    
    let {guild} = message;
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sem permissão");
    let role = args.join(" ").slice(1);
    if(!role) return message.reply("Digite um cargo");
    message.guild.roles.find(role => role.name === `${role}`).delete();

    // message.channel.send(`Cargo `/`${role}`/` apagado!`);
    
    
  }
}
