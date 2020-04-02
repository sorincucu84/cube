const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["s"],
  description: "Says your input via the bot",
  usage: "<input>",
  run: (client, message, args) => {
    message.delete().catch(O_o => {});

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new Discord.RichEmbed()
        .setDescription("<:erro:620435792225107969> Sem permissão")
        .setColor("#db6058")
        return message.channel.send(embed);
    }

    if (args.length < 1) {
      let embed = new Discord.RichEmbed()
        .setDescription("<:erro:620435792225107969> Digite algo \n<:terminal:656082314853482497> Use: **;say \"Alguma coisa\"**")
        .setColor("#db6058");
      return message.channel.send(embed);
    }

    const roleColor = message.guild.me.highestRole.hexColor;

    if (args[0] === "embed") {
      const embed = new RichEmbed()
        .setDescription(args.slice(1).join(" "))
        .setColor("3498db"); //(roleColor === "#000000" ? "#ffffff" : roleColor);

      message.channel.send(embed);
    } else {
      message.channel.send(args.join(" "));
    }
  }
};
