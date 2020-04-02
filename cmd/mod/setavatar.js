const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const { stripIndents } = require("common-tags");
module.exports = {
  name: "setavatar",
  aliases: ["banir"],
  description: "Bane um usuário",
  usage: "[mention]",
  run: (client, message, args) => {
    
    message.delete().catch(O_o => {});

    
  let image = args.slice(1).join(" ");

    client.user.setAvatar (image);

    // const embed = new Discord.RichEmbed()
    //   .setColor(c.green)
    //   .setDescription(e.correto +`Imagem alterada com sucesso`)
    // return message.channel.send(embed);
  }
};
